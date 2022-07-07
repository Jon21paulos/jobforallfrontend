import { READ_PAYMENT,SUCCESS_PAYMENT,FILTER_READ_PAYMENT, SET_PAYMENT,POST_PAYMENT,READ_PAYMENT_DATA } from '../constants/actionTypes';
import * as api from '../../api/index'

export const getPayment = () => async (dispatch) => {
  try {
    const { data } = await api.ReadPaymentData();
    dispatch({ type: READ_PAYMENT_DATA, data });

  } catch (error) {
    console.log(error);
  }
}; 
export const createPayment = (form) => async (dispatch) => {
  try {
    const { data } = await api.PostPayment(form);
    dispatch({ type: POST_PAYMENT, data });

  } catch (error) {
    console.log(error);
  }
}; 
export const ReadPayment = () => async (dispatch) => {
    try {
      const { data } = await api.ReadPayment();
      dispatch({ type: READ_PAYMENT, data });

    } catch (error) {
      console.log(error);
    }
  }; 

export const filterReadPayment = (fid,eid,jid) => async (dispatch) => {
    try {
      const { data } = await api.FilterPaymentData(fid,eid,jid);
      dispatch({ type: FILTER_READ_PAYMENT, data });

    } catch (error) {
      console.log(error);
    }
  };   

export const setPayment = (data) => async (dispatch) => {
    try {
      dispatch({ type: SET_PAYMENT, data });

    } catch (error) {
      console.log(error);
    }
  };   

export const PaymentSuccess = () => async (dispatch) => {
    try {
      const { data } = await api.PaymentSuccess();
      dispatch({ type: SUCCESS_PAYMENT, data });

    } catch (error) {
      console.log(error);
    }
  };   