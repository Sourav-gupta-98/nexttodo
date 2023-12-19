import Link from "next/link";

export default function Home() {
  return (
    <main
      className="container p-5"
      style={{ alignItems: "center", verticalAlign: "middle", marginTop: 100 }}
    >
      <div className="row">
        <div className="col-12 text-success" style={{ textAlign: "center" }}>
          <h1>Hey! User Welcome Back :)</h1>
        </div>
        <div className="col-12">
          <Link href={"/login"}>
            <button className="btn btn-secondary w-100">Login</button>
          </Link>
        </div>
        <div className="col-12">
          <Link href={"/register"}>
            <button className="btn btn-secondary w-100 mt-3">Register</button>
          </Link>
        </div>
        <div className="col-12">
          <Link href={"/dashboard"}>
            <button className="btn btn-secondary w-100 mt-3">Dashboard</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
