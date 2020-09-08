import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { startFetchHistory } from '../../actions/histories';
import { paginationDataSlicer } from '../../utils/helperMethods';
import History from './History';
import Paginator from '../Paginator/Paginator';

export const Histories = ({ histories, startFetchHistory, pagination }) => {
  const { currentPage } = pagination;

  const countPerPage = 3;

  useEffect(() => {
    startFetchHistory();
  }, []);

  const paginatedData = paginationDataSlicer(
    histories,
    currentPage,
    countPerPage
  );

  return (
    <div className="Container">
      <h1 className="Title">History</h1>
      <div className="DataContainer">
        {paginatedData.map(history => <History key={history.id} history={history} />)}
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
