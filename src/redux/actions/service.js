import { READ_SERVICE,POST_SERVICE } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getService = (navigate) => async (dispatch) => {
  try {
    const { data } = await api.GetServiceseeker();

    dispatch({ type: READ_SERVICE, payload: data});
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const postService = (post,navigate) => async (dispatch) => {
  try {
    const { data } = await api.PostServiceseeker(post);

    dispatch({ type: POST_SERVICE, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};
