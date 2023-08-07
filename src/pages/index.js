import Image from "next/image";
import img2 from "../images/vercel.svg";
export default function Page({ posts, users }) {
  return (
    <>
      <h1 className="text-center test bg-white">
        Hello, Next.js222!
        <Image
      src={img2}
      priority
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <style jsx>{`
        .test {
          color: red;
        }
        .yourClassName {
          width: 50px;
          height: 30px;
        }
      `}</style>
    </>
  );
}

async function GetPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await res.json();
}
async function GetUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return await res.json();
}
// This gets called on every request
export async function getServerSideProps() {
  const posts = await GetPosts();
  let users = await GetUsers();
  // Pass data to the page via props
  return { props: { posts, users } };
}
