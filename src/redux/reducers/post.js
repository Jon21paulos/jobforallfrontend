import { FETCH_ALL, CREATE, UPDATE, DELETE, RESET,REMOVE_JOB } from '../constants/actionTypes';

const initialState = {
  posts:[],
  count:null,
  next:null,
  prev:null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload.results,count:action.payload.count,next:action.payload.next,prev:action.payload.previous}
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post.JobId === action.payload.JobId ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post.JobId !== action.payload) };
    case RESET:
      return {...state,posts:[]}
    case REMOVE_JOB:
      return { ...state, posts: state.posts.filter((post) => post.JobId !== action.payload) };
     

    default:
      return state;
  }
};


export default postReducer