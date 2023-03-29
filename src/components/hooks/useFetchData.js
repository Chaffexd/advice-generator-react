import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [quoteData, setQuoteData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice?t=` + Math.random());
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const JSON = await response.json();
      setQuoteData(JSON);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // this populates info immediately on page then, then kicks off the timer
    fetchData();
    const timer = setInterval(() => {
      fetchData();
    }, 5000);

    // this cleans up the timer after it's done
    return () => {
      clearInterval(timer);
    };
  }, []);

  return { quoteData, error, fetchData };
};

export default useFetchData;
