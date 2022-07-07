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
import ChatList from './pages/chat/ChatList';
import FeedA from './components/admin/FeedA';
import AdminHome from './pages/home/AdminHome';
import Reports from './components/admin/Report/Reports';
import Warnings from './pages/warning/Warnings';
import Video from './pages/video/Video';
import VideoJ from './pages/video/VideoJ';
import MessageList from './pages/chat/MessageList';
import Verify from './components/Employer/components/freelance/Verify';
import Success from './components/Employer/components/freelance/Success';
import { Cancel } from '@material-ui/icons';
import Payments from './components/admin/notification/Payments';
import Profile from './pages/home/Profile';
import FullPayment from './components/Employer/components/freelance/FullPaymnet';
import PostService from './components/Jobseeker/components/serviceseeker/PostService';
import Vdo1 from './pages/video/v1';
import AnnounceList from './components/Jobseeker/components/announce/AnnounceList';

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
             <Route path="applierlist/profileview" element={ <Profile/> } />
             <Route path="applierlist/videochat/:id" element={ <Video/> } />
             <Route path="chat" element={ <ChatList/> } />
             <Route path="chat/message" element={ <MessageList/> } />
             <Route path="warning" element={ <Warnings/> } />
             <Route path="chat/verification" element={ <Verify/> } />
             <Route path="chat/verification/success" element={ <Success/> } />
             <Route path="chat/verification/cancel" element={ <Cancel/> } />
             <Route path="chat/profileview" element={ <Profile/> } />
             <Route path="chat/fullpayment" element={ <FullPayment/> } />

             {/* <Route path="createpost" element={ <CreatePost/> } /> */}
          </Route>  

          <Route path="/home/jobseeker" element={<JobseekerHome />} >
             <Route path="" element={ <FeedJ/> } />
             <Route path="postservice" element={ <PostService/> } />
             {/* <Route path="postjob" element={ <CreatePost/> } /> */}
             <Route path="profile" element={ <ProfileJ/> } />
             <Route path="announce" element={ <AnnounceList/> } />
             <Route path="profileview" element={ <Profile/> } />
             <Route path="appliedlist" element={ <AppliedList/> } />
             <Route path="chat" element={ <ChatList/> } />
             <Route path="chat/message" element={ <MessageList/> } />
             <Route path="notification" element={ <Warnings/> } />
             <Route path="videochat" element={ <VideoJ/> } />

          </Route> 

           <Route path="/home/admin" element={<AdminHome/>} >
             <Route path="" element={ <FeedA/> } />
             {/* {/* <Route path="listjob" element={ < ListPost/> } /> */}
             <Route path="reports" element={ <Reports/> } /> 
             <Route path="notification" element={ <Payments/> } />
             {/* <Route path="profile" element={ <ProfileA/> } /> */}
             {/* <Route path="appliedlist" element={ <AppliedList/> } />
             <Route path="chat" element={ <ChatList/> } /> */} 

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