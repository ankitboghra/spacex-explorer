const initialState = {
  histories: { currentPage: 1 },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PAGE':
      return {
        ...state,
        [payload.componentName]: { currentPage: payload.currentPage },
      };

    default:
      return state;
  }
};
