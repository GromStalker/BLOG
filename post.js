import { text } from "./server/textPost.js";

document.addEventListener("DOMContentLoaded", async () => {
    const urlTitle = document.getElementById('article-title');
    const text2 = document.getElementById('posttext');
        const answer = await text()
        const element = answer.data;

        urlTitle.textContent = element.title;
        text2.textContent = element.body;

});