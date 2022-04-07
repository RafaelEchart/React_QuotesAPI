import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetQuote } from '../../redux/main/quotes';

const Quotes = () => {
  const quote = useSelector((state) => state.quoteAPI);
  const dispatch = useDispatch();

  const clickButton = () => {
    dispatch(fetchGetQuote());
  };

  return (
    <>
      <div className="quotes_container">
        <span>{quote}</span>
        <Button type="primary" onClick={clickButton}>Random Quote.</Button>
      </div>
    </>
  );
};

export default Quotes;
