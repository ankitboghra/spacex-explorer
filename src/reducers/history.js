export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_HISTORY':
      return [...state, ...payload];

    default:
      return state;
  }
};
