const FETCH_STREETS_REQUEST = 'FETCH_STREETS_REQUEST';
const FETCH_STREETS_SUCCESS = 'FETCH_STREETS_SUCCESS';
const FETCH_STREETS_FAILURE = 'FETCH_STREETS_FAILURE';
const initialState = [];


const reducer = (state = initialState, action) => {
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

export default reducer;