import { READ_APPLIER ,APPLY_POST, READ_APPLIED,SET_APPLIER} from '../constants/actionTypes';

const initialState = {
  applier:[],
  loading:true
}

const applierReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_APPLIER:
      return { ...state, applier: action.payload, loading:false}
    case APPLY_POST:
        console.log("user",action.payload.user)
        return { ...state, applier: [...state.applier, action.payload.user] };
    case SET_APPLIER:
      console.log("haset",action.payload)
      return { ...state, applier: action.payload, loading:false}
    default:
      return state;
  }
};



export default applierReducer