import { useState } from 'react';
import { Button } from 'antd';

const Quotes = () => {
  const [quote, setQuote] = useState('Click the button to get a random quote!');

  const getQuote = async () => {
    try {
      const response = await fetch('http://localhost:3000/greetings');
      const data = await response.json();
      console.log(data);
      setQuote(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="quotes_container">
        <span>{quote}</span>
        <Button type="primary" onClick={getQuote}>Random Quote.</Button>
      </div>
    </>
  );
};

export default Quotes;
