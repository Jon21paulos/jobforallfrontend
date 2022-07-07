import { APPLY_POST, DELETE_APPLIER, FILTER_APPLIER, READ_APPLIER,SET_APPLIER } from '../constants/actionTypes';
import * as api from '../../api/index'
import { logout } from './auth';

export const getApplier = (navigate,Eid,Aid,page) => async (dispatch) => {
  try {
    const { data } = await api.ReadApplierList(Eid,Aid,page);
    dispatch({ type: READ_APPLIER, payload: data });

  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const deleteApplier = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteApplier(id);
    dispatch({ type: DELETE_APPLIER, payload: id });

  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
    }
  }
};

export const setApplier = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_APPLIER, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const filterApplier = (degree,grade,year,adderss) => async (dispatch) => {
  try {
    const data = {
      degree:degree,
      gradr:grade,
      year:year,
      adderss:adderss
    }
    dispatch({ type: FILTER_APPLIER, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const applyPost = (applydata,navigate) => async (dispatch) => {
    try {
      const { data } = await api.ApplyPost(applydata);
      dispatch({ type: APPLY_POST, payload: data });
  
    } catch (error) {
      console.log('jone',error)
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };

