import { scrollEfects } from "./scrollefect.js";

const d = document;
const $header = d.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', () => {
    scrollEfects($header);
});