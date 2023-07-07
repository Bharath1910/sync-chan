let currentURL = window.location.href;
let animeUrlName = currentURL.split("/")[4];

let animeName = animeUrlName.split("-").slice(0, -1).join(" ");


(async () => {
const res = await chrome.runtime.sendMessage({animeName})
console.log(res)
})()