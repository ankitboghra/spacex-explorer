export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_PAYLOADS':
      return [...state, ...payload];

    default:
      return state;
  }
};
