import { READ_TESTIMONIAL,POST_TESTIMONIAL,READ_RATING,POST_RATING } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getTestimonial = (navigate,id) => async (dispatch) => {
  try {
    const { data } = await api.ReadTestimonial(id);
    dispatch({ type: READ_TESTIMONIAL, payload: data});
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const createTestimonial = (navigate,post) => async (dispatch) => {
  try {
    const { data } = await api.PostTestimonial(post);

    dispatch({ type: POST_TESTIMONIAL, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const getRating = (navigate,id) => async (dispatch) => {
    try {
      const { data } = await api.ReadRating(id);  
      let sum = 0;

      data.forEach(data => {
            sum += data.rating;
      });

      dispatch({ type: READ_RATING, payload: sum/data.length });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
  
  export const createRating = (navigate,post) => async (dispatch) => {
    try {
      const { data } = await api.PostRating(post);
  
      dispatch({ type: POST_RATING, payload: data });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
  