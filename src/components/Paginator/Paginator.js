import React from 'react';
import { connect } from 'react-redux';

import './Paginator.css';
import { setPage } from '../../actions/pagination';

const Paginator = ({
  pageName,
  setPage,
  totalDataCount = 1,
  countPerPage = 5,
}) => {
  const numberOfPages = Math.ceil(totalDataCount / countPerPage);

  return (
    <div>
      {Array(numberOfPages)
        .fill()
        .map((_, index) => (
          <button key={index} onClick={() => setPage(pageName, index + 1)}>
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default connect(null, { setPage })(Paginator);
