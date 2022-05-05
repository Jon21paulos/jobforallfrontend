import React from "react";

import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";

const BasicForm = () => {
    const {control,formState: { errors }} = useFormContext();
  
    console.log(errors);
    
    return (
      <>
        <Typography variant="h6" gutterBottom>
          create account before fill profile form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
            control={control}
            name="username"
            rules={{ required: "this field is required." }}
            render={({ field }) => (
              <TextField
                id="user-name"
                label="User Name"
                variant="outlined"
                placeholder="Enter Your User Name"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.userName)}
                helperText={errors.userName?.message}
              />
            )}
          />
         </Grid>
        
        <Grid item xs={12} sm={6}>
          <Controller
          control={control}
          name="email"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="email"
              label="email"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.email)}
              helperText={errors.email?.message}
            />
          )}
         />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Controller
          control={control}
          name="password"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="Enter Your password"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <Controller
          control={control}
          name="password2"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="password2"
              label="Password"
              variant="outlined"
              placeholder="Re Enter Your Password"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.password2)}
              helperText={errors.password2?.message}
            />
          )}
        />
        </Grid>
  
      </Grid>
      </>
    );
  };
export default BasicForm;