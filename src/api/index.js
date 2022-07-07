import axios from 'axios';


const baseURL = 'http://localhost:8000';

export const API = axios.create({
     baseURL: baseURL,
     timeout: 5000,
     headers: {
         Authorization: localStorage.getItem('access_token')
             ? 'Bearer ' + localStorage.getItem('access_token')
             : null,
         'Content-Type': 'application/json',
         accept: 'application/json',
     }, 
});


// API.interceptors.request.use(async req => {
//     let access_token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null

//     if(access_token===null){
//         return req
//     }else{
//         console.log(access_token)
//         access_token = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null
//         req.headers.Authorization = `Bearer ${access_token}`
//     }
    
//     const user = jwt_decode(access_token)

//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

//     if(!isExpired) return req

//     const response = await axios.post(`${baseURL}/api/token/refresh/`, {
//         refresh: localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null
//       });

//     localStorage.setItem('access_token', JSON.stringify(response.data.access));
//     localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
//     req.headers.Authorization = `Bearer ${response.data.access}`

//     return req
// })


export const account = (id) => API.get(`/api/user/${id}`);

export const signIn = (formData) => API.post('/api/token/', formData);

export const createPost = (newPost) => API.post('/job/add', newPost);
export const fetchPosts = (page,path) => API.get(`/job?p=${page}&${path}`);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.put(`/job/edit/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/job/delete/${id}`);

export const signUpJs = (formData) => API.post('/api/user/register/jobseeker/', formData);
export const signUpEm = (formData) => API.post('/api/user/register/employer/', formData);

export const EditJobseekerProfile = (id,formData) => API.put(`/api/user/jobseeker/profile/edit/${id}`, formData);
export const ReadJobseekerProfile = (id) => API.get(`/api/user/jobseeker/profile/${id}`);

export const EditEmployerProfile = (id,formData) => API.put(`/api/user/employer/profile/edit/${id}`, formData);
export const ReadEmployerProfile = (id) => API.get(`/api/user/employer/profile/${id}`);

export const ApplyPost = (applydata) => API.post(`/applier/add`,applydata);
export const ReadApplierList = (Eid,Aid,page) => API.get(`/applier/?p=${page}&EmployerId=${Eid}&ApplierId=${Aid}`);
export const deleteApplier = (id) => API.delete(`/applier/delete/${id}`);

export const ReadVchat = (id) => API.get(`/vchat/${id}`);
export const PostVchat = (formData) => API.post('/vchat/add', formData);
export const deleteVchat = (id) => API.delete(`/vchat/delete/${id}`);

export const ReadChat = (Jid,Eid) => API.get(`/chat/?JobseekerId=${Jid}&EmployerId=${Eid}&created_at=`);
export const PostChat = (formData) => API.post('/chat/add', formData);
export const deleteChat = (id) => API.delete(`/chat/delete/${id}`);
export const editChat = (id,chat) => API.put(`/chat/edit/${id}`,chat);

export const createNotify = (formData) => API.post('/reports/notify/add', formData);
export const ReadNotify = (em,js) => API.get(`reports/notify?notifier=${em}&notified=${js}&notify=`);


export const ReadMessage = (cid) => API.get(`/chat/message?ChatId=${cid}&Message=&sender=&created_at=`);
export const PostMessage = (formData) => API.post('/chat/message/add', formData);
export const deleteMessage = (id) => API.delete(`/chat/message/delete/${id}`);

export const ReadReport = (page) => API.get(`/reports/?p=${page}`);
export const PostReport = (formData) => API.post('/reports/add', formData);
export const DeleteReport = (id) => API.delete(`/reports/delete/${id}`);

export const ReadWarning = (id) => API.get(`/reports/warning?warnedUser=${id}&warningMessage=`);
export const PostWarning = (formData) => API.post('/reports/warning/add', formData);

export const ReadTestimonial = (id) => API.get(`/feedback/testimonial?jobseekerId=${id}&testimonial=`);
export const PostTestimonial = (formData) => API.post('/feedback/testimonial/add', formData);

export const ReadRating = (id) => API.get(`/feedback/rating?jobseekerId=${id}&rating=`);
export const PostRating = (formData) => API.post('/feedback/rating/add', formData);

export const ReadPayment = () => API.get(`/payment`);
export const PaymentSuccess = () => API.get(`/payment/success?TotalAmount`);

export const ReadPaymentData = () => API.get(`/payment/list`);
export const FilterPaymentData = (fid,eid,jid) => API.get(`/payment/list?freelancerId=${fid}&employerId=${eid}&jobId=${jid}&chatId=&payment=`);
export const PostPayment = (form) => API.post(`/payment/add`,form);

export const GetServiceseeker = () => API.get(`/serviceseeker`);
export const PostServiceseeker = (form) => API.post(`/serviceseeker/add`,form);
