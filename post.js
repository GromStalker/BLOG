import { commentstext } from "./server/comments.js";
import { text } from "./server/textPost.js";

document.addEventListener("DOMContentLoaded", async () => {
    const urlTitle = document.getElementById('article-title');
    const text2 = document.getElementById('posttext');
    const commentsList = document.getElementById('comments-list');
        const answer = await text()
        const element = answer.data;

    
        urlTitle.textContent = element.title;
        text2.textContent = element.body;

        const commentsResponse = await commentstext()
        const comments = commentsResponse.data;

        commentsList.innerHTML = comments.map(comment => `
            <div>
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            </div>
        `).join('');


});
