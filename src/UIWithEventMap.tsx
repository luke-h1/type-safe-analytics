
import { useCallback } from "react";
import { trackEvent } from "./analytics-eventmap";


function UIWithEventMap() {
  const onCheckout = useCallback(() => {
    trackEvent("checkout", {
      products: ["iphone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    trackEvent("addToCart", {
      product: "iphone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    trackEvent("viewProduct", {
      product: "iphone",
      referrer: "Android phone",
    });
  }, [])
  
  
  return (
    <div>
      <h2>UI with EventMap</h2>
      <button onClick={onViewItem}>view item</button>
      <button onClick={onAddToCart}>add to cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
export default UIWithEventMap