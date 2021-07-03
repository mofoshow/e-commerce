const initialState = {
  products: [],
  total: 0,
};

const getProductIndex = (products, productId) => {
  return products.findIndex((product) => {
    return product.id === productId;
  });
};

const addProductToObject = (state, action) => {
  return {
    products: [...state.products, action.product],
    total: state.total + action.product.price,
  };
};

const removesProductFromObject = (state, productIndex) => {
  let splicedArray = [...state.products];
  splicedArray.splice(productIndex, 1);
  return {
    products: splicedArray,
    total: state.total - state.products[productIndex].price,
  };
};

const addQuantityToProductInObject = (state, action, productIndex) => {
  let newState = { ...state };
  const updatedProduct = {
    ...state.products[productIndex],
    quantity: state.products[productIndex].quantity + 1,
  };
  let splicedArray = [...newState.products];
  splicedArray.splice(productIndex, 1, updatedProduct);
  newState = {
    products: splicedArray,
    total: state.total + action.product.price,
  };
  return newState;
};

const removesQuantityFromProductInObject = (state, productIndex) => {
  const updatedProduct = {
    ...state.products[productIndex],
    quantity: state.products[productIndex].quantity - 1,
  };
  let splicedArray = [...state.products];
  splicedArray.splice(productIndex, 1, updatedProduct);
  return {
    products: splicedArray,
    total: state.total - updatedProduct.price,
  };
};

const cartReducer = (state = initialState, action) => {
  let newState;
  let productIndex;
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      productIndex = getProductIndex(state.products, action.product.id);
      if (productIndex === -1) {
        newState = addProductToObject(state, action);
      } else {
        newState = addQuantityToProductInObject(state, action, productIndex);
      }
      return newState;
    case "REMOVE_PRODUCT_FROM_CART":
      productIndex = getProductIndex(state.products, action.productId);
      if (state.products[productIndex].quantity === 1) {
        newState = removesProductFromObject(state, productIndex);
      } else {
        newState = removesQuantityFromProductInObject(state, productIndex);
      }
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
