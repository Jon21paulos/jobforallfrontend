import React,{useState} from "react";
import {  Box,Card,CardActionArea,CardActions,CardContent,CardMedia,FormControlLabel,makeStyles,Typography,} from "@material-ui/core";
import { useDispatch } from "react-redux";  
import { deletePost } from "../../../../../redux/actions/post";
import useStyles from "../../../../styles";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

const Applier = ({ applier,handleChange }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
      <Card className={classes.card}>
        <CardActionArea>
            {/* <CardMedia className={classes.media} image={img} title="My Post" /> */}
            <CardContent>
            <Typography gutterBottom variant="h5">
                {applier.ApplierId.name}
            </Typography>
            <Typography variant="body2">
                {applier.ApplierId.phone}
            </Typography>
            <Typography variant="body2">
                {applier.EmployerId.company_name}
            </Typography>
            <Typography variant="body2">
                {applier.PostId.Title}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Box>
              <FormControlLabel 
                control={<Checkbox className="form-check-input" name = {applier.ApplyId} checked={applier?.isChecked || false} onChange={handleChange} />}
              />
            </Box>
            {/* <Button size="small" color="primary" onClick={()=>handleEdit(applier.JobId)}>
            Edit post
            </Button> */}
        </CardActions>
        </Card>
    );
};

export default Applier;