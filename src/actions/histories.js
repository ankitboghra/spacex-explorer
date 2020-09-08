import axios from 'axios';

const fetchHistory = (data) => ({
  type: 'GET_HISTORY',
  payload: data,
});

export const startFetchHistory = () => {
  //   const limit = 5;
  //   const offset = (currentPage - 1) * limit;
  //   let res = await axios.get(
  //     `https://api.spacexdata.com/v3/history?limit=${limit}&offset=${offset}`
  //   );

  // Fetching all data and paginating locally
  // as total count of data is unavailable

  return async (dispatch) => {
    let res = await axios.get(`https://api.spacexdata.com/v3/history`);
    let data = res.data;

    if (!data) {
      dispatch(fetchHistory([]));
      return;
    }

    dispatch(fetchHistory(data));
  };
};
