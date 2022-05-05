import React from "react";

import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";
import FileBase from 'react-file-base64';

const PersonalForm = ({setPostData,postData}) => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Full Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="adderss"
          render={({ field }) => (
            <TextField
              id="adderss"
              label="Address"
              variant="outlined"
              placeholder="Enter Your Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      {/* <Controller
          control={control}
          name="profile_photo"
          render={({ field }) => (
            <TextField
              id="profile_photo"
              label="Photo"
              variant="outlined"
              placeholder="Enter Your Photo"
              fullWidth
              margin="normal"
              {...field}
            />
    
          )}
        />  */}
       <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
      </>
    );
  };

  export default PersonalForm;