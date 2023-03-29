import React from 'react';

import classes from './QuoteText.module.css';
import separator from '../../images/pattern-divider-desktop.svg';

const QuoteText = (props) => {
    const { data, error } = props;

    if (error) {
        return <div>{error}</div>;
    }

    if (!data || !data.slip) {
        return <div>Loading...</div>;
    }

    const { id, advice } = data.slip;

    console.log(id, advice);
    let content = <p>Loading...</p>
    if(data) {
        content = <p className={classes.quote}>"{advice}"</p>
    }

    if (error) {
        content = <p className={classes.quoteError}>{error}</p>;
    }

    if (!data || !data.slip) {
        content =  <p className={classes.quote}>Loading...</p>;
    }

    return (
        <div className={classes.quoteContainer}>
            <p className={classes.advice}>Advice #{id}</p>
            <div className={classes.quoteDiv}>
                {content}
            </div>
            <img src={separator} />
            <button></button>
        </div>
  );
};

export default QuoteText;