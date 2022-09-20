import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate"
  );
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(API_URL);
  const data = await response.json();
  return { props: { posts: data } };
};

export default function NewsPage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`}>
          <a>
            <h3>{post.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
