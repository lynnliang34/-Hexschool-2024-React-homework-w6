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
