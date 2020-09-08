import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Payloads.css';
import { startFetchPayloads } from '../../actions/payloads';
import { paginationDataSlicer } from '../../utils/helperMethods';
import Paginator from '../Paginator/Paginator';

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
    <div>
      <h1>Payload</h1>
      <div className="Payloads">
        {currentPage}
        {paginatedData.map(({ payload_id, nationality, payload_type }) => (
          <div className="Payload" key={payload_id}>
            <p>Payload ID: {payload_id}</p>
            <p>Nationality: {nationality}</p>
            <p>Payload Type: {payload_type}</p>
          </div>
        ))}
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
