import { renderHTML } from "./utils.js";

const navbar = document.getElementsByTagName('nav')[0];
const footer = document.getElementsByTagName('footer')[0];

renderHTML('../documents/template.header.html', navbar);
renderHTML('../documents/template.footer.html', footer);



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'title') {
        console.log("ON TITLE")

        console.log(request.animeName)
        const image = document.getElementById('not-found');
        image.style.display = 'hidden';
        image.style.visibility = 'hidden';

        const text = document.getElementById('mag-icon');
        text.style.display = 'hidden';
        text.style.visibility = 'hidden';

        let title = document.getElementById('title');
        title.innerHTML = request.animeName;
    }
})