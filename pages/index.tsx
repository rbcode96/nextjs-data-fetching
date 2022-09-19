import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <h1>Next.js Data Fetching</h1>
      <ul>
        <li>
          <Link href="/posts">
            <a>
              SSR: Server-side rendering (<code>getServerSideProps</code>)
            </a>
          </Link>
        </li>
        <li>
          <Link href="/static-site-generation">
            <a>
              SSG: Static-site generation (<code>getStaticProps</code>)
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
