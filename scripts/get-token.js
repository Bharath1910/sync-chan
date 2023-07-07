let accessToken = document.getElementById('access-token').innerText;
let refreshToken = document.getElementById('refresh-token').innerText;

console.log("testing! get-token here!");
console.log(accessToken, refreshToken);

(async () => {
    const res = await chrome.runtime.sendMessage({
        type: 'get-token',
        accessToken,
        refreshToken
    })
})();