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
