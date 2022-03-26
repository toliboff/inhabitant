const FETCH_HOUSES_REQUEST = 'FETCH_HOUSES_REQUEST';
const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
const FETCH_HOUSES_FAILURE = 'FETCH_HOUSES_FAILURE';
const initialState = [];


export const fetchHouses = (id) => async (dispatch)=> {
  console.log('Function call');
    dispatch({ type: FETCH_HOUSES_REQUEST });
    fetch('https://dispex.org/api/vtest/Request/houses/'+id)
      .then(res => res.json())
      .then(houses => {
        console.table(houses);
        dispatch({ type: FETCH_HOUSES_SUCCESS, houses });
      })
      .catch(err=>{
        console.log('Error is: ', err)
      })
  }


const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSES_REQUEST:
      return state;
    case FETCH_HOUSES_SUCCESS:
      return action.houses;
    case FETCH_HOUSES_FAILURE:
      return state;
    default:
      return state;
  }
}

export default streetReducer; 