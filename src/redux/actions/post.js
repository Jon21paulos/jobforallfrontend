import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,REMOVE_JOB } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getPosts = (navigate,page,path) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page,path);

    dispatch({ type: FETCH_ALL, payload: data});
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const createPost = (post,navigate) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const updatePost = (id, post,navigate) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data)
    dispatch({ type: UPDATE, payload: data.message });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const deletePost = (id,navigate) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const removeJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_JOB, payload: id });
  } catch (error) {
    console.log(error)
  }
};