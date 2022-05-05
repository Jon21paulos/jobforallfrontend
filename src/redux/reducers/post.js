import { FETCH_ALL, CREATE, UPDATE, DELETE, RESET } from '../constants/actionTypes';

const initialState = {
  posts:[]
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
        console.log(action.payload)
      // return action.payload;
      return { ...state, posts: action.payload}
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post.JobId === action.payload.JobId ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post.JobId !== action.payload) };
    case RESET:
      return {...state,posts:[]}
    default:
      return state;
  }
};


export default postReducer