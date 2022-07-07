import { ACCOUNT, LOGOUT } from '../constants/actionTypes';
import * as api from '../../api/index'
import { logout } from './auth';
export const Account = (id,navigate) => async (dispatch) => {
    try {

      const { data } = await api.account(id);
  
      dispatch({ type: ACCOUNT, data });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
