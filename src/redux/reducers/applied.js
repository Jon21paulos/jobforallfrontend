import {  READ_APPLIED} from '../constants/actionTypes';

const initialState = {
  applied:[],
  loading:true
}

const appliedReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_APPLIED:
      return { ...state, applied: action.payload, loading:false}
    
    default:
      return state;
  }
};



export default appliedReducer