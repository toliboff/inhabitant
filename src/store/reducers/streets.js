const FETCH_STREETS_REQUEST = 'FETCH_STREETS_REQUEST';
const FETCH_STREETS_SUCCESS = 'FETCH_STREETS_SUCCESS';
const FETCH_STREETS_FAILURE = 'FETCH_STREETS_FAILURE';
const initialState = [];


export const fetchStreets = () => async (dispatch)=> {
  console.log('Function call');
    dispatch({ type: FETCH_STREETS_REQUEST });
    fetch('https://dispex.org/api/vtest/Request/streets')
      .then(res => res.json())
      .then(streets => {
        console.table(streets);
        dispatch({ type: FETCH_STREETS_SUCCESS, streets });
      })
      .catch(err=>{
        console.log('Error is: ', err)
      })
  }


const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STREETS_REQUEST:
      return state;
    case FETCH_STREETS_SUCCESS:
      return action.streets;
    case FETCH_STREETS_FAILURE:
      return state;
    default:
      return state;
  }
}

export default streetReducer; 