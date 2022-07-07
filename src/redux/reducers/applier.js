import { READ_APPLIER,DELETE_APPLIER, APPLY_POST,SET_APPLIER,FILTER_APPLIER} from '../constants/actionTypes';

const initialState = {
  applier:[],
  loading:true
}

const applierReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_APPLIER:
      return { ...state, applier: action.payload, loading:false}
    case APPLY_POST:
        return { ...state, applier: [...state.applier.results, action.payload.user] };
    case SET_APPLIER:
      return { ...state, applier: action.payload}
    case DELETE_APPLIER:
      return { ...state, applier: state.applier.filter((app) => app.ApplyId !== action.payload) };
    case FILTER_APPLIER:
      return {...state, applier:
           state.applier.results.filter(function (a){
            return a.ApplierId.degree == action.payload.degree 
                //  a.ApplierId.grade == action.payload.grade ||
                //  a.ApplierId.year == action.payload.year ||
                //  a.ApplierId.adderss == action.payload.adderss
        })
      }
    default:
      return state;
  }
};



export default applierReducer