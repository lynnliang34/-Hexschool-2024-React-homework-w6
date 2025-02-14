import axios from "axios";
import ReactLoading from "react-loading";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function AddToCartBtn({
  product_id,
  qty,
  btn_style,
  isLoading,
  setIsLoading,
  getCart,
  children,
}) {
  // 加入購物車
  const addCartItem = async (product_id, qty) => {
    setIsLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/${API_PATH}/cart`, {
        data: {
          product_id,
          qty: Number(qty),
        },
      });
      getCart();
    } catch (error) {
      alert(`加入購物車失敗
       ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={() => addCartItem(product_id, qty)}
      type="button"
      className={`btn ${btn_style} d-flex align-items-center gap-2`}
    >
      {children}
      {isLoading && (
        <ReactLoading
          type={"spin"}
          color={"#000"}
          height={"1.5rem"}
          width={"1.5rem"}
        />
      )}
    </button>
  );
}

export default AddToCartBtn;
