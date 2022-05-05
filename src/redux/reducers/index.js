import { combineReducers } from 'redux';

import authReducer from './auth';
import profileReducer from './profile';
import accountReducer from './account';
import postReducer from './post';
import applierReducer from './applier'
import appliedReducer from './applied';
export const reducers = combineReducers(
    {  auth:authReducer,
        pr: profileReducer,
        ar:accountReducer, 
        por:postReducer,
        applierR:applierReducer,
        appliedR:appliedReducer
        
    }
);
