import { SUCCESS_PAYMENT,FILTER_READ_PAYMENT, READ_PAYMENT,SET_PAYMENT,POST_PAYMENT,READ_PAYMENT_DATA } from '../constants/actionTypes';

const initialState = {
  payment:null,
  paymentData:null,
  payments:[]
}

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_PAYMENT:
      return { ...state, payment: action.data.obj}
    case SUCCESS_PAYMENT:
      return {...state,success: action.data}
    case SET_PAYMENT:
      return {...state,paymentData:action.data}
    case READ_PAYMENT_DATA:
      return {...state,payments:action.data}
    case FILTER_READ_PAYMENT:
        return {...state,payments:action.data}  
    case POST_PAYMENT:
      return { ...state, payments: [...state.payments, action.data.user] };

    default:
      return state;
  }
};


export default paymentReducer