import { useCallback } from "react";
import { addToCart, checkoutEvent, viewProduct } from "./analytics-funcs";

function UIWithFuncs() {
  const onCheckout = useCallback(() => {
    checkoutEvent({
      products: ["iphone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    addToCart({
      product: "iphone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    viewProduct({
      product: "iphone",
      referrer: "Android phone",
    });
  }, []);

  return (
    <div>
      <h2>UI with funcs</h2>
      <button onClick={onViewItem}>view item</button>
      <button onClick={onAddToCart}>add to cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
export default UIWithFuncs;

