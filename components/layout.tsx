import Link from "next/link";

export default function Layout({ children, frontMatter }) {
  return (
    <>
      <div
        style={{
          background: "#efefef",
          padding: "0 30px",
          marginBottom: "30px",
          borderBottom: "1px solid lightgrey",
        }}
      >
        {frontMatter && (
          <Link href="/">
            <a>
              <span style={{ fontSize: "32px" }}>Home...</span>
            </a>
          </Link>
        )}
        <h4 style={{ float: "right", marginTop: "15px", color: "#666" }}>
          {frontMatter && <pre>{JSON.stringify(frontMatter)}</pre>}
        </h4>
      </div>

      <div
        style={{
          color: "#555",
          margin: "0 auto",
          maxWidth: "900px",
          fontSize: "11pt",
          padding: "0 15px",
        }}
      >
        {children}
      </div>

      <footer
        style={{
          borderTop: "1px solid lightgrey",
          padding: "30px",
          marginTop: "50px",
          background: "#efefef",
          fontSize: "12pt",
          textAlign: "center",
        }}
      >
        <div>
          Contact me...
          <br />
          <a href="mailto:YY@gmail.com">XXX -- YY@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
