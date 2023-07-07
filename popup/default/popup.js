animeName = document.getElementById("anime-name");

chrome.runtime.onMessage.addListener(
    function (req, sender, sendRes) {
        console.log(req.animeName)
        animeName.innerHTML = req.animeName;
    }
)

const login = document.getElementById("login");
const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    chrome.storage.local.set({
        'accessToken': undefined,
        'refreshToken': undefined
    })
})