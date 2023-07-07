chrome.storage.local.get(['username', 'avatar'], (result) => {
    const username = document.getElementById("username");
    const avatar = document.getElementById("avatar");

    if (result.username == undefined || result.avatar == undefined) {
        username.innerHTML = "Not logged in";
    } else {
        username.innerHTML = result.username;
        avatar.src = result.avatar;
    }
})

chrome.storage.local.get(['accessToken'], (result) => {
    const username = document.getElementById("username");
    const avatar = document.getElementById("avatar");

    console.log("ACCESS TOKEN")
    let accessToken = result.accessToken;

    fetch('https://api.myanimelist.net/v2/users/@me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(data => {
        username.innerHTML = data.name;
        avatar.src = data.picture;

        chrome.storage.local.set({
            'username': data.name,
            'avatar': data.picture
        })
    }) 
})