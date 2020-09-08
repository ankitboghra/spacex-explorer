export const paginationDataSlicer = (
  data = [],
  currentPage = 1,
  countPerPage = 5
) =>
  data.slice(
    (currentPage - 1) * countPerPage,
    (currentPage - 1) * countPerPage + countPerPage
  );
