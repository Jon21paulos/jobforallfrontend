import { fabClasses } from '@mui/material';
import * as actionType from '../constants/actionTypes';

const initialState = {
    vchatData: null ,
    loading:true
  }

const vchatReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case actionType.POST_VCHAT:
            return { ...state, vchatData: action.data,loading:false }; 
        case actionType.READ_VCHAT:
            return { ...state, vchatData: action.payload.data,loading:false }; 
        case actionType.DELETE_VCHAT:
            return { ...state, vchatData: action.data,loading:false };                
        case actionType.RESET_VCHAT:
            return {...state,vchatData:null,loading:true}    
        default:
            return state;
  }
};

export default vchatReducer;