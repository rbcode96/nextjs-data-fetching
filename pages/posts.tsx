import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(API_URL);
  const data = await response.json();
  return { props: { posts: data } };
};

export default function PostsPage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`posts/${post.id}`}>
          <a key={post.id}>
            <h3>{post.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
