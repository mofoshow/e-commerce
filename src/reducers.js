const initialState = {
  products: [],
  total: 0,
};

const getProductIndex = (products, productId) => {
  return products.findIndex((product) => {
    return product.id === productId;
  });
};

const cartReducer = (state = initialState, action) => {
  let newState;
  let productIndex;
  let splicedArray;
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      productIndex = getProductIndex(state.products, action.product.id);
      if (productIndex === -1) {
        newState = {
          products: [...state.products, action.product],
          total: state.total + action.product.price,
        };
      } else {
        newState = { ...state };
        const updatedProduct = {
          ...state.products[productIndex],
          quantity: state.products[productIndex].quantity + 1,
        };
        splicedArray = [...newState.products];
        splicedArray.splice(productIndex, 1, updatedProduct);
        newState = {
          products: splicedArray,
          total: state.total + action.product.price,
        };
      }
      return newState;
    case "REMOVE_PRODUCT_FROM_CART":
      productIndex = getProductIndex(state.products, action.productId);
      if (state.products[productIndex].quantity === 1) {
        splicedArray = [...state.products];
        splicedArray.splice(productIndex, 1);
        newState = {
          products: splicedArray,
          total: state.total - state.products[productIndex].price,
        };
      } else {
        const updatedProduct = {
          ...state.products[productIndex],
          quantity: state.products[productIndex].quantity - 1,
        };
        splicedArray = [...state.products];
        splicedArray.splice(productIndex, 1, updatedProduct);
        newState = {
          products: splicedArray,
          total: state.total - updatedProduct.price,
        };
      }
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
