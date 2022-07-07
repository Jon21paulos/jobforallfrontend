import { READ_REPORT, READ_NOTIFY, CREATE_NOTIFY, POST_REPORT,DELETE_REPORT,READ_WARNING,POST_WARNING } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getReports = (navigate,page) => async (dispatch) => {
  try {
    const { data } = await api.ReadReport (page);

    dispatch({ type: READ_REPORT, payload: data});
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const createReport = (navigate,post) => async (dispatch) => {
  try {
    const { data } = await api.PostReport(post);

    dispatch({ type: POST_REPORT, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const createNotify = (navigate,post) => async (dispatch) => {
  try {
    const { data } = await api.createNotify(post);

    dispatch({ type: CREATE_NOTIFY, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const readNotify = (navigate,em,js) => async (dispatch) => {
  try {
    const { data } = await api.ReadNotify(em,js);

    dispatch({ type: READ_NOTIFY, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const deleteReport = (navigate,id) => async (dispatch) => {
    try {
      await api.DeleteReport(id);
  
      dispatch({ type: DELETE_REPORT, payload: id });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };


  
  export const getWarning = (navigate,id) => async (dispatch) => {
    try {
      const { data } = await api.ReadWarning(id);
  
      dispatch({ type: READ_WARNING, payload: data});
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
  export const createWarning = (navigate,post) => async (dispatch) => {
    try {
      const { data } = await api.PostWarning(post);
  
      dispatch({ type: POST_WARNING, payload: data });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };