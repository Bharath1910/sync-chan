animeName = document.getElementById("anime-name");

chrome.runtime.onMessage.addListener(
    function (req, sender, sendRes) {
        console.log(req.animeName)
        animeName.innerHTML = req.animeName;
    }
)