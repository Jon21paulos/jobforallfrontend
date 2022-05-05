import * as actionType from '../constants/actionTypes';

const profileReducer = (state = { profileData: null, loading: true }, action) => {
  
    switch (action.type) {
        case actionType.EDIT_JS_PROFILE:
            //   console.log(action?.data)  
            // return { ...state, profileData: action.data, loading:false}; 
            return { ...state };   

        case actionType.READ_JS_PROFILE:
            //   console.log(action?.data)  
            return { ...state, profileData: action.data, loading:false};         
            
        case actionType.EDIT_EM_PROFILE:
            //   console.log("hey"+ action?.data)  
            // return { ...state, profileData: state.profileData.map((pro) => (pro.user.user === action.payload.user.user ? action.payload : pro)) };

            // return { ...state, profileData: action.data ,loading:false };   
            return { ...state };   
        
        case actionType.READ_EM_PROFILE:
                return {...state,profileData:action.data,loading:false}

        case actionType.RESET:
            return {...state,profileData:null, loading:true}

        default:
            return state;
  }
};

export default profileReducer;