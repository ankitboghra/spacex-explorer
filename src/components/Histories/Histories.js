import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Histories.css';
import { startFetchHistory } from '../../actions/histories';
import { paginationDataSlicer } from '../../utils/helperMethods';
import Paginator from '../Paginator/Paginator';

export const Histories = ({ histories, startFetchHistory, pagination }) => {
  const { currentPage } = pagination;

  const countPerPage = 5;

  useEffect(() => {
    startFetchHistory();
  }, []);

  const paginatedData = paginationDataSlicer(
    histories,
    currentPage,
    countPerPage
  );

  return (
    <div>
      <h1>History</h1>
      <div className="Histories">
        {currentPage}
        {paginatedData.map(({ id, title, details }) => (
          <div className="History" key={id}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Details: {details}</p>
          </div>
        ))}
      </div>
      <div>
        <Paginator
          countPerPage={countPerPage}
          pageName="histories"
          totalDataCount={histories.length}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  histories: state.histories,
  pagination: state.pagination.histories || { currentPage: 1 },
});

export default connect(mapStateToProps, { startFetchHistory })(Histories);
