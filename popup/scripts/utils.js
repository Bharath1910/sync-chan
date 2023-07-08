export function renderHTML(html, element) {
    fetch(html)
        .then(response => response.text())
        .then(html => {
            element.innerHTML = html;
        })
}