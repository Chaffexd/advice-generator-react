import React from 'react';
import useFetchData from './hooks/useFetchData';
import QuoteText from './QuoteText';

import classes from './Quote.module.css';

const Quote = () => {
    const { quoteData, error, fetchData } = useFetchData();
    
    console.log(quoteData);
    console.log(error);

    const newQuoteHandler = () => {
        fetchData();
    };

    return (
        <div className={classes.quoteContainer}>
            <QuoteText data={quoteData} error={error} onClick={newQuoteHandler} />
        </div>
    );
};

export default Quote;