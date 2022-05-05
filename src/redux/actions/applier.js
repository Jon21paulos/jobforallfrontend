import { APPLY_POST, READ_APPLIER,SET_APPLIER } from '../constants/actionTypes';
import * as api from '../../api/index'
import { logout } from './auth';

export const getApplier = (navigate,id) => async (dispatch) => {
  try {
    const { data } = await api.ReadApplierList(id);
    dispatch({ type: READ_APPLIER, payload: data });

  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const setApplier = (data) => async (dispatch) => {
  try {
    console.log('hasabu',data)
    dispatch({ type: SET_APPLIER, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const applyPost = (applydata,navigate) => async (dispatch) => {
    try {
      const { data } = await api.ApplyPost(applydata);
      dispatch({ type: APPLY_POST, payload: data });
  
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };

