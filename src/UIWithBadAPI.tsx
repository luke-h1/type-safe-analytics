import { useCallback } from "react";
import analytics from "./analytics-bad";

function UIWithBadAPI() {
  const onCheckout = useCallback(() => {
    analytics.track("checkout", {
      products: ["iphone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    analytics.track("addToCart", {
      product: "iphone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    analytics.track("viewProduct", {
      product: "iphone",
      referrer: "Android phone",
    });
  }, []);
  return (
    <div>
      <h2>UI with bad API</h2>
      <button onClick={onViewItem}>view item</button>
      <button onClick={onAddToCart}>add to cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
export default UIWithBadAPI;
