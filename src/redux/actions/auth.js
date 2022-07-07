import { SIGNIN,SIGNUP,LOGOUT, RESET,SIGNIN_ERROR,SIGNUP_ERROR} from '../constants/actionTypes';
import * as api from '../../api/index'

export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

     dispatch({ type: SIGNIN, data });
     navigate('/home')

  } catch (error) {
    if(error.response.status===401){
      alert("username or password incorrect");

    }else{
      alert("please enter valid input");
    }

  }
};

export const signupJs = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUpJs(formData);

    dispatch({ type: SIGNUP, data });

    // router.push('/');
  } catch (error) {
    console.log(error.response.status)
    if(error.response.status===400){
      alert("user already exist");
    }else{
      alert("please enter valid input");
    }

  }
};

export const signupEm = (formData) => async (dispatch) => {
    try {
      const { data } = await api.signUpEm(formData);
  
      dispatch({ type: SIGNUP, data });
  
      // router.push('/');
    } catch (error) {
      if(error.response.status===400){
        alert("user already exist");
  
      }else{
        alert("please enter valid input");
      }
  
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