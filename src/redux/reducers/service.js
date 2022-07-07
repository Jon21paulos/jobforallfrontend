import { READ_SERVICE,POST_SERVICE } from '../constants/actionTypes';

const initialState = {
  services:[],
  
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_SERVICE:
      return { ...state, services: action.payload.results}
    case POST_SERVICE:
      return { ...state, services: [...state.services, action.payload] };

    default:
      return state;
  }
};


export default serviceReducer