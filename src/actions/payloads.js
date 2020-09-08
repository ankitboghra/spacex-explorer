import axios from 'axios';

const fetchPayloads = (data) => ({
  type: 'GET_PAYLOADS',
  payload: data,
});

export const startFetchPayloads = () => {
  return async (dispatch) => {
    let res = await axios.get(`https://api.spacexdata.com/v3/payloads`);
    let data = res.data;

    if (!data) {
      dispatch(fetchPayloads([]));
      return;
    }

    dispatch(fetchPayloads(data));
  };
};
