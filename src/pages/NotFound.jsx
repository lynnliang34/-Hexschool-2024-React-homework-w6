import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">此路由不存在！</h1>
      <Link to="/" className="btn btn-primary mt-3">
        回到首頁
      </Link>
    </div>
  );
}
