import React,{useState} from 'react'
import JobseekerLS from '../../components/JobseekerLS'
import EmployerLS from '../../components/EmployerLS'

function SignUp() {
  const [isEmployer, setisEmployer] = useState(false)
  const [isShow, setisShow] = useState(true)

  const handleClick =(val)=>{
    setisEmployer(val)
    setisShow(false)
  }
  return (
    <div>
      
      {
        isShow?
        <div>
          <button onClick={()=>handleClick(true)}>continue as employer</button>
          <button onClick={()=>handleClick(false)}>continue as jobseeker</button>
        </div>:
        isEmployer?<EmployerLS/>:<JobseekerLS/>

      }
    </div>
  )
}

export default SignUp