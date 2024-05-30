export async function urlPost(){
    const responce = await fetch("https://gorest.co.in/public-api/posts?page=")
    const answer = await responce.json()
    return answer
}