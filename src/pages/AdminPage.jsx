import { useState } from "react";
import LoginPage from "./LoginPage";
import AdminProductsPage from "./AdminProductsPage";

export default function AdminPage() {
  // 記錄使用者是否已登入
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <AdminProductsPage setIsLogin={setIsLogin} />
      ) : (
        <LoginPage setIsLogin={setIsLogin} />
      )}
    </>
  );
}
