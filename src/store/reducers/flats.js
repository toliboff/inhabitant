const FETCH_FLATS_REQUEST = 'FETCH_FLATS_REQUEST';
const FETCH_FLATS_SUCCESS = 'FETCH_FLATS_SUCCESS';
const FETCH_FLATS_FAILURE = 'FETCH_FLATS_FAILURE';
const initialState = [];


export const fetchFlats = (id) => async (dispatch)=> {
  console.log('Function call');
    dispatch({ type: FETCH_FLATS_REQUEST });
    fetch('https://dispex.org/api/vtest/Request/house_flats/'+id)
      .then(res => res.json())
      .then(flats => {
        console.table(flats);
        dispatch({ type: FETCH_FLATS_SUCCESS, flats });
      })
      .catch(err=>{
        console.log('Error is: ', err)
      })
  }


const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLATS_REQUEST:
      return state;
    case FETCH_FLATS_SUCCESS:
      return action.flats;
    case FETCH_FLATS_FAILURE:
      return state;
    default:
      return state;
  }
}

export default streetReducer; 