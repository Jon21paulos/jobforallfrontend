import { POST_REPORT,READ_NOTIFY, CREATE_NOTIFY, READ_REPORT,RESET,DELETE_REPORT,READ_WARNING,POST_WARNING } from '../constants/actionTypes';

const initialState = {
  report:[],
  warning:[],
  notify:[],
  count:null,
  next:null,
  prev:null
}

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_REPORT:
      return { ...state, report: action.payload.results,count:action.payload.count,next:action.payload.next,prev:action.payload.previous}
    case POST_REPORT:
      return { ...state, report: [...state.report, action.payload] };
    case DELETE_REPORT:
      return { ...state, report: state.report.filter((report) => report.reportId !== action.payload) };
    case READ_WARNING:
      return { ...state, warning: action.payload}
    case CREATE_NOTIFY:
      return { ...state, notify: [...state.notify, action.payload] };
    case READ_NOTIFY:
      return { ...state, notify: action.payload}


    case POST_WARNING:
      return { ...state, warning: [...state.warning, action.payload] };
    case RESET:
      return {...state,report:[],warning:[]}
    default:
      return state;
  }
};


export default reportReducer