export function addProductToCart(product) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    product,
  };
}

export function removeProductFromCart(productId) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    productId,
  };
}

export default { addProductToCart, removeProductFromCart };
