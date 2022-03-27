const FETCH_INHABITANTS_REQUEST = 'FETCH_INHABITANTS_REQUEST';
const FETCH_INHABITANTS_SUCCESS = 'FETCH_INHABITANTS_SUCCESS';
const FETCH_INHABITANTS_FAILURE = 'FETCH_INHABITANTS_FAILURE';
const initialState = [];


export const fetchInhabitants = () => async (dispatch)=> {
  console.log('Function call');
    dispatch({ type: FETCH_INHABITANTS_REQUEST });
    fetch('https://dispex.org/api/vtest/Request/INHABITANTS')
      .then(res => res.json())
      .then(inhabitants => {
        console.table(inhabitants);
        dispatch({ type: FETCH_INHABITANTS_SUCCESS, inhabitants });
      })
      .catch(err=>{
        console.log('Error is: ', err)
      })
  }


const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INHABITANTS_REQUEST:
      return state;
    case FETCH_INHABITANTS_SUCCESS:
      return action.inhabitants;
    case FETCH_INHABITANTS_FAILURE:
      return state;
    default:
      return state;
  }
}

export default streetReducer; 