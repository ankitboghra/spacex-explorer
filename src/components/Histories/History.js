import React from 'react';

import './History.css';

const History = ({ history }) => {
    const { title, details, event_date_unix, flight_number, links } = history;
    const { reddit, article, wikipedia } = links;

    const date = new Date(event_date_unix).toDateString();

    return (
        <details className="Data HistoryData">
            <summary className="HistoryTitleSection">
                <span className="HistoryTitle">{title}</span>
                <span className="HistoryEventDate">({date})</span>
            </summary>
            <span className="HistoryDetails">{details}</span>
            {flight_number && <span>(Flight Number : {flight_number})</span>}
            <span className="HistoryLinks">
                {reddit && <a href={reddit} target="_blank" rel="noopener noreferrer">Reddit</a>}
                {article && <a href={article} target="_blank" rel="noopener noreferrer">Article</a>}
                {wikipedia && <a href={wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>}
            </span>
        </details>
    )
}

export default History;
