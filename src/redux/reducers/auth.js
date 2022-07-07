import * as actionType from '../constants/actionTypes';
import { API } from '../../api';
const authReducer = (state = { authData: null,error:null }, action) => {
  
    switch (action.type) {
        case actionType.SIGNIN:
            // console.log(action?.data)  
          
            localStorage.setItem('access_token', action.data.access);
			localStorage.setItem('refresh_token', action.data.refresh);
			API.defaults.headers['Authorization'] ='Bearer ' + localStorage.getItem('access_token');

            return { ...state, authData: action.data };
            
        case actionType.SIGNUP:
        //   console.log(action?.data)  
            // localStorage.setItem('token',  JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
            
        case actionType.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null,  };
        case actionType.SIGNIN_ERROR:
            return {...state, error:action.data}
        default:
            return state;
  }
};

export default authReducer;