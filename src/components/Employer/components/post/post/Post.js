import React,{useState} from "react";
import {  Button,Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";  
import { deletePost } from "../../../../../redux/actions/post";
import useStyles from "../../../../styles";
import { useNavigate } from "react-router-dom";


const Post = ({ post,setisedit,setpostData }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleDelete = (id) =>{
        dispatch(deletePost(id,navigate))
    }

    const handleEdit = (post) =>{
        setpostData(post)
        setisedit(false)
    }

    return (
        <Card sx={{ minWidth: 275 }} className={classes.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.City}
          </Typography>
          <Typography variant="h5" component="div">
            {post.Title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.Salary}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.Jobtype}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.Jobtime}
          </Typography>
          <Typography variant="body2">
            {post.Description}
          </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>handleDelete(post.JobId)}>
                Delete post
            </Button>
            <Button  variant="outlined" startIcon={<EditIcon />}  onClick={()=>handleEdit(post)}>
                Edit post
            </Button>
            
        </CardActions>
      </Card>
    );
};

export default Post;