import React,{useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Account } from '../../redux/actions/account'
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'
import { getPosts } from '../../redux/actions/post';

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  let [user, setUser] = useState(()=> localStorage.getItem('access_token') ? jwt_decode(localStorage.getItem('access_token')) : null)
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  // const {loading} = useSelector((state) => ({loading:state.ar}))

  useEffect(()=> {
        user? getUser(): navigate(-1)
    }, [])

  const getUser=()=>{
    dispatch(Account(user.user_id,navigate))    
  }
  console.log(accountData)
  return (
    <div>
        {
           accountData ? accountData.user.is_staff?navigate('admin'):accountData.user.is_employer? navigate('employer'):navigate('jobseeker') :<h2>Loading</h2>

            // accountData? accountData.user.is_employer?<EmployerHome/>:<JobSeekerHome/>: <h2>Loading</h2>
        }
    </div>
  )
}

export default Home