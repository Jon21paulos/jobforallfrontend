import { EDIT_JS_PROFILE,EDIT_EM_PROFILE ,READ_EM_PROFILE,READ_JS_PROFILE} from '../constants/actionTypes';
import * as api from '../../api/index'

export const EditJobseekerProfile = (id,formData) => async (dispatch) => {
    try {
      const { data } = await api.EditJobseekerProfile(id,formData);
  
      dispatch({ type: EDIT_JS_PROFILE, data });
    } catch (error) {
      console.log(error);
    }
  };
  export const EditEmployerProfile = (id,formData) => async (dispatch) => {
    try {
      const { data } = await api.EditEmployerProfile(id,formData);
  
      dispatch({ type: EDIT_EM_PROFILE, data });

    } catch (error) {
      console.log(error);
    }
  };  

  export const ReadEmployerProfile = (id) => async (dispatch) => {
    try {
      const { data } = await api.ReadEmployerProfile(id);
      dispatch({ type: READ_EM_PROFILE, data });
      
    } catch (error) {
      console.log(error);
    }
  };  
 
  export const ReadJobseekerProfile = (id) => async (dispatch) => {
    try {
      const { data } = await api.ReadJobseekerProfile(id);
  
      dispatch({ type: READ_JS_PROFILE, data });

    } catch (error) {
      console.log(error);
    }
  }; 