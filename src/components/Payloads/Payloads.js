import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { startFetchPayloads } from '../../actions/payloads';
import { paginationDataSlicer } from '../../utils/helperMethods';
import Paginator from '../Paginator/Paginator';
import Payload from "./Payload";

export const Payloads = ({ payloads, startFetchPayloads, pagination }) => {
  const { currentPage } = pagination;

  const countPerPage = 5;

  useEffect(() => {
    startFetchPayloads();
  }, []);

  const paginatedData = paginationDataSlicer(
    payloads,
    currentPage,
    countPerPage
  );

  return (
    <div className="Container">
      <h1 className="Title">Payload</h1>
      <div className="DataContainer">
        {paginatedData.map(payload => <Payload key={payload.payload_id} payload={payload} />)}
      </div>
      <div>
        <Paginator
          countPerPage={countPerPage}
          pageName="payloads"
          totalDataCount={payloads.length}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  payloads: state.payloads,
  pagination: state.pagination.payloads || { currentPage: 1 },
});

export default connect(mapStateToProps, { startFetchPayloads })(Payloads);
