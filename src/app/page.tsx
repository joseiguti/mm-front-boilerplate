import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Demo</h1>
      <Link href="/demo">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Demo Form
        </button>
      </Link>
    </div>
  );
}
