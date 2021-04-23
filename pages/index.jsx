import Head from "next/head";
import Link from "next/link";
import Image from "components/image";
import A from "components/mdx-link";

export default function Home({ ramps }) {
  return (
    <div>
      <Head>
        <title>CoCalc NextJS Template</title>
        <link rel="icon" href={`${process.env.basePath ?? ""}/favicon.ico`} />
      </Head>

      <main>
        <h1>CoCalc NextJS Template</h1>
        <Link href="markdown-page/">Markdown Page</Link>
      </main>
    </div>
  );
}
