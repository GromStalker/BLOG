import { urlPost } from "./server/UrlPost.js";
document.addEventListener("DOMContentLoaded", async () => {
    const prat = new URLSearchParams(window.location.search);
    const page = prat.get(`id`) 
    const paginationDiv = document.getElementById('pagination');
    const urlList = document.getElementById('posts');
    const response = await urlPost();
    const url = response.data;
    const pagination = response.meta.pagination;
    urlList.innerHTML = url.map(URL => `
        <div>
            <a href="post.html?id=${URL.id}">${URL.title}</a>
        </div>`).join('');
    
    
    let paginationHtml = '';

// Проверяем, есть ли несколько страниц
if (pagination.pages > 1) {
    // Проверяем, не находимся ли мы на первой странице
    if (page > 1) {
        paginationHtml += '<a href="index.html?page=' + (page - 1) + '">Previous</a>';
    }

    const pages = [];
    // Если всего страниц меньше или равно 5, добавляем их все в массив
    if (pagination.pages <= 5) {
        for (let i = 1; i <= pagination.pages; i++) {
            pages.push(i);
        }
    } else {
        // Если страниц больше 5, добавляем текущую страницу и её соседей,
        // а также маркеры "..." для обозначения пропущенных страниц
        if (page > 2) pages.push('...');
        if (page > 1) pages.push(page - 1);
        pages.push(page);
        if (page < pagination.pages) pages.push(page + 1);
        if (page < pagination.pages - 1) pages.push('...');
        pages.push(pagination.pages);
    }

    // Обрабатываем каждую страницу в массиве
    pages.forEach(p => {
        if (p === '...') {
            paginationHtml += '<span>...</span>';
        } else if (p == page) {
            paginationHtml += '<strong>' + p + '</strong>';
        } else if (p == 1) {
            paginationHtml += '<a href="index.html">' + p + '</a>';
        } else {
            paginationHtml += '<a href="index.html?page=' + p + '">' + p + '</a>';
        }
    });

    // Проверяем, не находимся ли мы на последней странице
    if (page < pagination.pages) {
        paginationHtml += '<a href="index.html?page=' + (page + 1) + '">Next</a>';
    }
}

paginationDiv.innerHTML = paginationHtml;
});