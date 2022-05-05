import { READ_APPLIED } from '../constants/actionTypes';
import * as api from '../../api/index'
import { logout } from './auth';

export const getApplied = (navigate,id) => async (dispatch) => {
    try {
      const { data } = await api.ReadAppliedList(id);
      dispatch({ type: READ_APPLIED, payload: data });
  
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };