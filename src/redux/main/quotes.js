const FETCH_DATA_QUOTE = 'FETCH_DATA_QUOTE';

const initialState = 'Click the button to get a random quote!';

export const fetchData = (data) => ({
  type: FETCH_DATA_QUOTE,
  payload: data,
});

export const fetchGetQuote = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/greetings');
    const data = await response.json();

    dispatch(fetchData(data.message));
  } catch (err) {
    console.log(err);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_QUOTE:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
