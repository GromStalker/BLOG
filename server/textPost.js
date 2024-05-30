export async function text(){
    const url = new URLSearchParams(window.location.search);
    const mainUrl = url.get(`id`) 
    const response = await fetch(`https://gorest.co.in/public-api/posts/${mainUrl}`);
    const answer = await response.json();
    return answer
}