let accessToken = document.getElementById('access-token').innerText;
let refreshToken = document.getElementById('refresh-token').innerText;

console.log("testing! get-token here!");
console.log(accessToken, refreshToken);

chrome.storage.onChanged.addListener()
chrome.storage.local.set({
    'accessToken': accessToken,
    'refreshToken': refreshToken
}, () => {
    console.log("tokens saved")
})