chrome.runtime.onMessage.addListener(
    function (req, sender, sendRes) {
        if (req.type === 'get-token') {
            console.log("testing! in the if statement!")
            console.log(req.accessToken, req.refreshToken)
        }

        if (req.type === 'title') {
            console.log("ON TITLE")
    
            console.log(req.animeName)
            console.log(req.episode)
        }
        
        else {
            console.log(req.form)
        }
    }
)

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url == undefined) {
        console.log("undefined")
        return
    }

    const animeDetails = changeInfo.url.split('/')[4];
    const animeName = animeDetails.split('?')[0].split('-').slice(0, -1).join(' ');

    (async () => {
    await chrome.runtime.sendMessage({
        type: 'title',
        animeName: animeName
    })
    })();
})