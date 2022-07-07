import { READ_TESTIMONIAL,POST_TESTIMONIAL,READ_RATING,POST_RATING } from '../constants/actionTypes';

const initialState = {
    testimonial:[],
    rating:null,

}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_TESTIMONIAL:
      return { ...state, testimonial: action.payload}
    case POST_TESTIMONIAL:
      return { ...state, testimonial: [...state.testimonial, action.payload.user] };
    
    case READ_RATING:
      return { ...state, rating: action.payload}
    case POST_RATING:
      return { ...state, rating: action.payload.user };
    

    default:
      return state;
  }
};


export default feedbackReducer