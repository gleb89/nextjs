export default function Page({ posts,users }) {

    return (
      <>
      <h1 className="text-center">Hello, Next.js222!</h1>
      <ul>
      {users.map((item) => (
        <li key={item.id}>
          {item.email}
        </li>
      ))}
    </ul>
      <ul>
      {posts.map((item) => (
        <li key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
      </>
    )

  }

async function GetPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  return  await res.json()
}
async function GetUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return  await res.json()
}
// This gets called on every request
export async function getServerSideProps() {

  const posts = await GetPosts()
  let users = await GetUsers()
  // Pass data to the page via props
  return { props: { posts,users }, }
}