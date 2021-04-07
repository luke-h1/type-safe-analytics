
import { useCallback } from "react";
import { trackEvent, EventName } from "./analytics-overloads-enums";


function UIWithOverloadsAndEnums() {
  const onCheckout = useCallback(() => {
    trackEvent(EventName.checkout, {
      products: ["iphone"],
    });
  }, []);

  const onAddToCart = useCallback(() => {
    trackEvent(EventName.addToCart, {
      product: "iphone",
      quantity: 2,
    });
  }, []);

  const onViewItem = useCallback(() => {
    trackEvent(EventName.viewProduct, {
      product: "iphone",
      referrer: "Android phone",
    });
  }, [])
  
  
  return (
    <div>
      <h2>UI with overloads</h2>
      <button onClick={onViewItem}>view item</button>
      <button onClick={onAddToCart}>add to cart</button>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
export default UIWithOverloadsAndEnums