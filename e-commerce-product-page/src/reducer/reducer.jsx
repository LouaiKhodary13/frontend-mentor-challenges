// Reducer
const reducer = (state, action) => {
  if (action.type === 'TOGGLE_CART') {
    return { ...state, showCart: !state.showCart };
  }
  if (action.type === 'INC_CART') {
    return {
      ...state,
      product: { ...state.product, amount: state.product.amount + 1 },
    };
  }
  if (action.type === 'DEC_CART') {
    return {
      ...state,
      product: {
        ...state.product,
        amount: state.product.amount > 0 ? state.product.amount - 1 : 0,
      },
    };
  }
  if (action.type === 'GET_TOTALS') {
    const total = state.product.amount * state.product.price;
    return { ...state, total };
  }
  return state;
};
export default reducer;
