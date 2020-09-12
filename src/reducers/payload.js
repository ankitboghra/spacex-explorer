export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_PAYLOADS':
      return [...payload];

    default:
      return state;
  }
};
