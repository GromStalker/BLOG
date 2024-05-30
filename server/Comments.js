export async function commentstext() {
    const url = new URLSearchParams(window.location.search);
    const mainUrl = url.get(`id`) 
    const responce = await fetch(`https://gorest.co.in/public-api/comments?post_id=${mainUrl}`)
    const answer = await responce.json()
    return answer
}