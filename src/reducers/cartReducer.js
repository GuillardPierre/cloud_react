export const initialState = 0;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
