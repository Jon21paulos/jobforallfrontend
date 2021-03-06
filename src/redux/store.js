import { reducers } from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'persist-key',
    storage,
    // blacklist:["auth"]    
    // whitelist:["auth"]

}
// const persistedReducer = persistReducer(persistConfig,reducers)

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const persistor = persistStore(store)

export default store
export {persistor}
