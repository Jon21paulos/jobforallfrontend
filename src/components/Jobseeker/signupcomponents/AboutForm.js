import React from "react";
import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";

const AboutForm = () => {
    const { control } = useFormContext();
    return (
      <>
       <Typography variant="h6" gutterBottom>
          descript about you
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
            control={control}
            name="skills"
            render={({ field }) => (
              <TextField
                id="skills"
                label="skills"
                variant="outlined"
                placeholder="skills"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
         </Grid>
        
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="objective"
            render={({ field }) => (
              <TextField
                id="objective"
                label="objective"
                variant="outlined"
                placeholder="objective"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        
        
        <Grid item xs={12}>
          <Controller
            control={control}
            name="project_title"
            render={({ field }) => (
              <TextField
                id="project_title"
                label="project_title"
                variant="outlined"
                placeholder="project_title"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="project_description"
            render={({ field }) => (
              <TextField
                id="project_description"
                label="project_description"
                variant="outlined"
                placeholder="project_description"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="achivement_and_award"
            render={({ field }) => (
              <TextField
                id="achivement_and_award"
                label="achivement_and_award"
                variant="outlined"
                placeholder="achivement_and_award"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="activities"
            render={({ field }) => (
              <TextField
                id="activities"
                label="activities"
                variant="outlined"
                placeholder="activities"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="social_media"
            render={({ field }) => (
              <TextField
                id="social_media"
                label="social_media"
                variant="outlined"
                placeholder="social_media"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>

      </Grid>
      </>
    );
  };
  
  export default AboutForm;