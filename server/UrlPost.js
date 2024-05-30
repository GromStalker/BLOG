let link = "https://gorest.co.in/public-api/posts?page="
export async function urlPost() {
    const responce = await fetch(`${link}`)
    const answer = await responce.json()
    return answer
}