chrome.runtime.onMessage.addListener(
    function (req, sender, sendRes) {
        if (req.type === 'get-token') {
            console.log("testing! in the if statement!")
            console.log(req.accessToken, req.refreshToken)
        }
    }
)