# -Hexschool-2024-React-homework-w6

【六角學院】2024 React 直播冬季班 第六週作業- Vite、React Router

## 目標：將 react-router 整合進先前的專案

[任務連結](https://rpg.hexschool.com/#/tasks/12062543649528575017)

延續第五週的專案，作業等級為 Lv2

會完成前台所有路由並將一些功能拆成頁面元件

<br>

## 安裝 react router

```bash
npm i react-router-dom@6
```

<br>

## 路由設定

1. 建立 router 與撰寫路由表（先寫首頁即可），副檔名要是 .jsx
2. 在 main.jsx 下 return RouterProvider，記得將 router 作為 props 傳入

<br>

#### 前台頁面

- 首頁
- 產品頁
- 產品詳細頁
- 購物車
- 建立訂單成功 - 前往付款（自行練習）
- 付款成功（自行練習）

<br>

## 加入導覽列（Layout）

模板

```html
<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container">
    <ul className="navbar-nav flex-row gap-5 fs-5">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">首頁</a>
      </li>
      <li className="nav-item"><a className="nav-link" href="#">產品頁</a></li>
      <li className="nav-item"><a className="nav-link" href="#">購物車</a></li>
    </ul>
  </div>
</nav>
```

- 在 layout 放置 Outlet 元件

<br>

## 將導覽列的 a 標籤換成 NavLink

<aside>
💡

NavLink 和 Link 的差異在於是否有 active 樣式，前者有後者沒有

因此若單純是用來跳轉的話，使用 Link 即可

</aside>

```jsx
const routes = [
  { path: "/", name: "首頁" },
  { path: "/products", name: "產品列表" },
  { path: "/cart", name: "購物車" },
];
```

<br>

## 拆分元件並撰寫路由表

- 產品頁
- 產品詳細頁
- 購物車

<br>

## 將 App.jsx 分別拆到對應的頁面元件內

- 產品列表頁
- 購物車

<br>

## 在產品頁面中新增切換路由的 Link 標籤

- 產品頁的查看更多

點擊後會跳轉到產品詳細頁

- 加入產品詳細頁的路由

<br>

## 產品詳細頁

[取得單一產品 API](<https://hexschool.github.io/ec-courses-api-swaggerDoc/#/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9%20-%20%E7%94%A2%E5%93%81%20(Products)/get_v2_api__api_path__product__id_>)

可以透過 useParams 拿到路由的 id

模板

```jsx
<div className="container mt-5">
  <div className="row">
    <div className="col-6">
      <img className="img-fluid" src={product.imageUrl} alt={product.title} />
    </div>
    <div className="col-6">
      <div className="d-flex align-items-center gap-2">
        <h2>{product.title}</h2>
        <span className="badge text-bg-success">{product.category}</span>
      </div>
      <p className="mb-3">{product.description}</p>
      <p className="mb-3">{product.content}</p>
      <h5 className="mb-3">NT$ {product.price}</h5>
      <div className="input-group align-items-center w-75">
        <select
          value={qtySelect}
          onChange={(e) => setQtySelect(e.target.value)}
          id="qtySelect"
          className="form-select"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <button type="button" className="btn btn-primary">
          加入購物車
        </button>
      </div>
    </div>
  </div>
</div>
```

<br>

## 404 頁面

path 設成 \*

<br>

## Link 與 a 標籤的差異

渲染出來都是 a 標籤，它們的差異是什麼呢？

<aside>
💡

透過 Link 元件換頁不會重新刷新頁面，a 標籤則會

Note：重新刷新頁面指的是向後端請求 HTML 重新渲染整個頁

</aside>

<br><br>

# 助教問答

Q：

助教您好~
這是我第六周作業的 [Github Repo](https://github.com/lynnliang34/-Hexschool-2024-React-homework-w6)、[Github Pages](https://lynnliang34.github.io/-Hexschool-2024-React-homework-w6/)

env 參數：

```jsx
VITE_BASE_URL = https://ec-course-api.hexschool.io/v2
VITE_API_PATH = lynnliang34
```

想請問：

1. 跟著助教影音做完後，嘗試做 Lv3 點登入跳到第四周作頁的編輯頁面。但複製完後發現，點擊分頁按鈕變直接跳回首頁，不知是什麼問題？

2. 有時寫作業在運行`npm run dev` 時，會跳出下方的錯誤訊息，差別只有最後的 8 位亂碼不同，我是直接手動找資料夾刪除，便能正常運行，可不知為何會出現此錯誤？

```jsx
[Error: EPERM: operation not permitted, rmdir 'C:\Users\lynnl\OneDrive\桌面\Project\2024 React 直播班\第六週作業\node_modules\.vite\deps_temp_8ab5061d'] {
  errno: -4048,
  code: 'EPERM',
  syscall: 'rmdir',
  path: 'C:\\Users\\lynnl\\OneDrive\\桌面\\Project\\2024 React 直播班\\第六週作業\\node_modules\\.vite\\deps_temp_8ab5061d'
}
```

3. 首頁`HomePage.jsx`有插入自己的圖片，試了兩種寫法，都是本地端可以看到，但 Github Page 顯示不出來，不知要怎麼改？

```jsx
<img src="/src/assets/infant.png"/>
<img src="../src/assets/infant.png"/>
```

—

A1：

因為目前是使用 a 標籤，會有 `href=”#”` 的預設，所以點擊時會回到首頁。

可在 a 標籤加上 `event.preventDefault()` 來取消預設行為：

```jsx
<a
  onClick={(event) => {
    event.preventDefault();
    handlePageChange(page + 1);
  }}
  className="page-link"
  href="#"
>
  {index + 1}
</a>
```

A2：
可以嘗試看看從專案路徑來做調整：

- 將專案移出 OneDrive 資料夾之外，因為 OneDrive 有時會執行一些檔案同步操作，所以可能會影響到程式執行。
- 將專案移出中文路徑之外，或調整中文路徑為英文路徑，在有些環境的操作，這些中文路徑可能會有所影響。另外在路徑也盡量避免空白，像是`2024 React 直播班` ，這有時候也會造成錯誤哩

（以上這兩個方式可先嘗試調整看看～）

A3：

目前的撰寫方式，在執行 `npm run build` 時，Vite 會不曉得要將這兩張圖片納入到編譯檔案內；所以這邊需使用先 import 的方式，這樣在執行 `npm run build` 時就會被納入摟～（可再看看[官方文件](https://vite.dev/guide/assets.html)）

```jsx
import babyWordImg from "../assets/baby_word.png";
import infantImg from "../assets/infant.png";

export default function HomePage() {
  return (
    <div className="container text-center">
      <img
        className="mt-5"
        src={babyWordImg}
        style={{ width: "400px" }}
        alt="寶寶用品店文字"
      />
      <h1 className="mt-1">寶寶用品店</h1>
      <img src={infantImg} style={{ width: "400px" }} alt="嬰兒圖示" />
    </div>
  );
}
```

另外提醒，因為同學部署的位置是：https://lynnliang34.github.io/-Hexschool-2024-React-homework-w6/，所以也記得 vite.config.js 的 base 路徑要做調整唷

```jsx
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/-Hexschool-2024-React-homework-w6/"
      : "/",
  plugins: [react()],
});
```
