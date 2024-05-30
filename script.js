import { urlPost } from "./server/UrlPost";
document.addEventListener("DOMContentLoaded", async () => {
    const urlList = document.getElementById('posts');
    const response = await urlPost();
    const url = response.data;
    urlList.innerHTML = url.map(URL => `
        <div>
            <a href="post.html?id=${URL.id}">${URL.title}</a>
        </div>`).join('');
});