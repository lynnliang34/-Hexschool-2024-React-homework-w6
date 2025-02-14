import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import AddToCartBtn from "../components/AddToCartBtn";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // 螢幕 loading
  const [isScreenLoading, setIsScreenLoading] = useState(false);

  // 部分 loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsScreenLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/api/${API_PATH}/products`);
        setProducts(res.data.products);
      } catch (error) {
        alert(`取得產品失敗
            ${error}`);
      } finally {
        setIsScreenLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ width: "200px" }}>
                  <img
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={product.imageUrl}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <del className="h6">原價 {product.origin_price} 元</del>
                  <div className="h5">特價 {product.price}元</div>
                </td>
                <td>
                  <div className="btn-group btn-group-sm">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-secondary"
                    >
                      查看更多
                    </Link>

                    <AddToCartBtn
                      product_id={product.id}
                      qty={1}
                      btn_style={"btn-outline-danger"}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    >
                      加到購物車
                    </AddToCartBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.3)",
            zIndex: 999,
          }}
        >
          <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
        </div>
      )}
    </>
  );
}
