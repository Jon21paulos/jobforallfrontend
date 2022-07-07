import { READ_VCHAT,POST_VCHAT,DELETE_VCHAT, RESET_VCHAT } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getVchat = (navigate,id) => async (dispatch) => {
  try {
    const { data } = await api.ReadVchat(id);
    dispatch({ type: RESET_VCHAT});
    dispatch({ type: READ_VCHAT,payload: data});

  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const createVchat = (navigate,post) => async (dispatch) => {
  try {
    const { data } = await api.PostVchat(post);

    dispatch({ type: POST_VCHAT, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const deleteVChat = (navigate,id) => async (dispatch) => {
  try {
    await api.deleteVchat(id);

    dispatch({ type: DELETE_VCHAT, payload: id });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const resetVchat = () => async (dispatch) => {
      dispatch({ type: RESET_VCHAT});  
  };