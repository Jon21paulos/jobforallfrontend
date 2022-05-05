import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Wellcome from './pages/wellcome/wellcome';
import Home from './pages/home/Home';
import NoPage from './pages/NoPage';
import FeedE from './components/Employer/components/FeedE';
import FeedJ from './components/Jobseeker/components/FeedJ';
import ProfileE from './components/Employer/components/ProfileE';
import ProfileJ from './components/Jobseeker/components/ProfileJ';
import CreatePost from './components/Employer/components/post/CreatePost';
import ListPost from './components/Employer/components/post/ListPost';
import ApplierList from './components/Employer/components/Applier/ApplierList';
import EmployerHome from './pages/home/EmployerHome';
import JobseekerHome from './pages/home/JobSeekerHome'
import PrivateRoute from './utils/PrivateRoute';
import AppliedList from './components/Jobseeker/components/applied/AppliedList';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PrivateRoute/>}>
          <Route path="/home" element={<Home />} />
          
          <Route  path="/home/employer" element={ <EmployerHome/> } >
             <Route path="" element={ <FeedE/> } />
             <Route path="listjob" element={ < ListPost/> } />
             <Route path="postjob" element={ <CreatePost/> } />
             <Route path="profile" element={ <ProfileE/> } />
             <Route path="applierlist" element={ <ApplierList/> } />

             {/* <Route path="createpost" element={ <CreatePost/> } /> */}
          </Route>  

          <Route path="/home/jobseeker" element={<JobseekerHome />} >
             <Route path="" element={ <FeedJ/> } />
             {/* <Route path="listjob" element={ < ListPost/> } />
             <Route path="postjob" element={ <CreatePost/> } /> */}
             {/* <Route path="createpost" element={ <CreatePost/> } /> */}
             <Route path="profile" element={ <ProfileJ/> } />
             <Route path="appliedlist" element={ <AppliedList/> } />

          </Route>  
        </Route>
          
          <Route path="/" element={<Wellcome />} />
         
          <Route path="/signin" element={<SignIn />} />
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
          
      </Routes>
    </BrowserRouter>

  )
}

export default App