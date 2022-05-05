import * as actionType from '../constants/actionTypes';

const accountReducer = (state = { accountData: null ,loading:true}, action) => {
  
    switch (action.type) {
        case actionType.ACCOUNT:
            return { ...state, accountData: action.data,loading:false };        
        case actionType.RESET:
            return {...state,accountData:null}    
        default:
            return state;
  }
};

export default accountReducer;