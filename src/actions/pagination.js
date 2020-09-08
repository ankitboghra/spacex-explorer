export const setPage = (componentName, currentPage) => ({
  type: 'SET_PAGE',
  payload: {
    componentName,
    currentPage,
  },
});
