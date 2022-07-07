import { combineReducers } from 'redux';

import authReducer from './auth';
import profileReducer from './profile';
import accountReducer from './account';
import postReducer from './post';
import chatReducer from './chat';
import reportReducer from './report';
import applierReducer from './applier'
import vchatReducer from './vchat';
import feedbackReducer from './feedback'
import paymentReducer from './payment';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import serviceReducer from './service';

const paymentReducerConfig = {
    key:'payment',
    storage    
}
const serviceReducerConfig = {
    key:'service',
    storage    
}
const authReducerConfig = {
    key:'auth',
    storage,
}
const profileReducerConfig = {
    key:'profile',
    storage    
}
const accountReducerConfig = {
    key:'account',
    storage    
}
const postReducerConfig = {
    key:'post',
    storage    
}
const applierReducerConfig = {
    key:'applier',
    storage    
}
const chatReducerConfig = {
    key:'chat',
    storage    
}
const reportReducerConfig = {
    key:'report',
    storage    
}
const vchatReducerConfig = {
    key:'vchat',
    storage    
}
const feedbackReducerConfig = {
    key:'feedback',
    storage    
}

export const reducers = combineReducers(
    {  auth: persistReducer(authReducerConfig,authReducer),
        pr: persistReducer(profileReducerConfig, profileReducer),
        ar:persistReducer(accountReducerConfig, accountReducer) ,
        por:persistReducer(postReducerConfig,postReducer),
        applierR:persistReducer(applierReducerConfig, applierReducer),
        chatReducer:persistReducer(chatReducerConfig, chatReducer),
        reportReducer:persistReducer(reportReducerConfig, reportReducer),
        vchatR:persistReducer(vchatReducerConfig, vchatReducer),
        feedbackReducer:persistReducer(feedbackReducerConfig, feedbackReducer),
        paymentReducer:persistReducer(paymentReducerConfig,paymentReducer),
        serviceReducer:persistReducer(serviceReducerConfig,serviceReducer)
      
    }
);
