import { renderHTML } from "./utils.js";

const navbar = document.getElementsByTagName('nav')[0];

renderHTML('../documents/template.header.html', navbar);