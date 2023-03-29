import React, { useEffect, useState } from 'react';
import QuoteText from './QuoteText';

import classes from './Quote.module.css';

const Quote = () => {
    // Holds the fetched data in an object so I can pull it out
    const [quoteData, setQuoteData] = useState({});
    // Sets the error if for some reason the api doesn't work
    const [error, setError] = useState(null);

    // Use effect is used here as we have a side effect with fetching data
    useEffect(() => {
        setError(null);
        const timer = setInterval(() => {
            const fetchData = async() => {
                try {
                    const response = await fetch(`https://api.adviceslip.com/advice?t=` + Math.random());
                    if(!response.ok) {
                        throw new Error('Something went wrong!');
                    }
                    const JSON = await response.json();
                    setQuoteData(JSON);
                } catch(error) {
                    setError(error.message)
                }
            }
            fetchData();
        }, 5000)

        return () => {
            clearInterval(timer);
        };

    }, [quoteData]);
    console.log(quoteData);
    console.log(error);

    return (
        <div className={classes.quoteContainer}>
            <QuoteText data={quoteData} error={error} />
        </div>
    );
};

export default Quote;