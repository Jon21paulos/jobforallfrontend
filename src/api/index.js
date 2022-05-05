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
export const fetchPosts = (page) => API.get(`/job?page=${page}`);
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
export const ReadApplierList = (id) => API.get(`/applier/?EmployerId=${id}`);
export const ReadAppliedList = (id) => API.get(`/applier/?ApplierId=${id}`);
