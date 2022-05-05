import { SIGNIN,SIGNUP,LOGOUT, RESET} from '../constants/actionTypes';
import * as api from '../../api/index'

export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

     dispatch({ type: SIGNIN, data });
     navigate('/home')

    // router.push('/');
  } catch (error) {
    console.log("jon",error);
  }
};

export const signupJs = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUpJs(formData);

    dispatch({ type: SIGNUP, data });

    // router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signupEm = (formData) => async (dispatch) => {
    try {
      const { data } = await api.signUpEm(formData);
  
      dispatch({ type: SIGNUP, data });
  
      // router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  
export const logout = (navigate) => async (dispatch) => {
    try {
      // const { data } = await api.signIn(formData);
  
       dispatch({ type: LOGOUT });
       dispatch({type:RESET})
       navigate('/signin')

      } catch (error) {
      console.log(error);
    }
  };