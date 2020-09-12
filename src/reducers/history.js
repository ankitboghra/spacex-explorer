export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_HISTORY':
      return [...payload];

    default:
      return state;
  }
};
