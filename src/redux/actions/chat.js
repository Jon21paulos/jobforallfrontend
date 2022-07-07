import { READ_CHAT,POST_CHAT,SET_MESSAGEID,EDIT_CHAT, SET_CHAT,SET_CHATID, DELETE_CHAT,READ_MESSAGE,POST_MESSAGE,DELETE_MESSAGE } from '../constants/actionTypes';
import { logout } from './auth';

import * as api from '../../api/index'

export const getChats = (navigate,Jid,Eid) => async (dispatch) => {
  try {
    const { data } = await api.ReadChat(Jid,Eid);
    dispatch({ type: READ_CHAT, payload: data});
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const setChats = (navigate,chat) => async (dispatch) => {
    dispatch({ type: SET_CHAT, payload: chat });

};

export const setChatId = (id) => async (dispatch) => {
  dispatch({ type: SET_CHATID, payload: id });

};

export const setMessageId = (id) => async (dispatch) => {
  dispatch({ type: SET_MESSAGEID, payload: id });
};

export const createChat = (navigate,post) => async (dispatch) => {
  try {
    const { data } = await api.PostChat(post);

    dispatch({ type: POST_CHAT, payload: data });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};


export const deleteChat = (navigate,id) => async (dispatch) => {
  try {
    await api.deleteChat(id);

    dispatch({ type: DELETE_CHAT, payload: id });
  } catch (error) {
    if(error.response.status == 401){
      console.log("unauthirized access")
      dispatch(logout(navigate))
    }
  }
};

export const getMessages = (navigate,cid) => async (dispatch) => {

    try {
      const { data } = await api.ReadMessage(cid);

      dispatch({ type: READ_MESSAGE, payload: data});
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
  export const createMessage = (navigate,post) => async (dispatch) => {
    try {
      const { data } = await api.PostMessage(post);
  
      dispatch({ type: POST_MESSAGE, payload: data.user });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };
  
  
  export const deleteMessage = (navigate,id) => async (dispatch) => {
    try {
      await api.deleteMessage(id);
  
      dispatch({ type: DELETE_MESSAGE, payload: id });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };

  export const updateChat = (id, chat,navigate) => async (dispatch) => {
    try {
      const { data } = await api.editChat(id, chat);
      dispatch({ type: EDIT_CHAT, payload: data.message });
    } catch (error) {
      if(error.response.status == 401){
        console.log("unauthirized access")
        dispatch(logout(navigate))
      }
    }
  };