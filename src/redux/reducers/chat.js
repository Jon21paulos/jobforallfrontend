import { READ_CHAT,POST_CHAT,SET_CHATID,EDIT_CHAT, SET_MESSAGEID, DELETE_CHAT,READ_MESSAGE,POST_MESSAGE,DELETE_MESSAGE,RESET, SET_CHAT } from '../constants/actionTypes';

const initialState = {
  chats:[],
  messages:[],
  chat:null,
  chatId:null,
  messageId:null
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CHAT:
      return { ...state, chats: action.payload}
    case POST_CHAT:
      return { ...state, chats: [...state.chats, action.payload.user] };
    case SET_CHAT:
      return { ...state, chat: action.payload};
    case SET_MESSAGEID:
      return { ...state, messageId: action.payload};
    case SET_CHATID:
      return { ...state, chatId: action.payload};           
    case DELETE_CHAT:
        return { ...state, chats: state.chats.filter((chat) => chat.ChatId !== action.payload) };
    case EDIT_CHAT:
      return { ...state, chats: state.chats.map((chat) => (chat.ChatId === action.payload.ChatId ? action.payload : chat)) };

    case READ_MESSAGE:
      return { ...state, messages: action.payload}
    case POST_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case DELETE_MESSAGE:
        return { ...state, messages: state.messages.filter((message) => message.MessageId !== action.payload) };

    case RESET:
      return {...state,chats:[],messages:[]}

    default:
      return state;
  }
};


export default chatReducer