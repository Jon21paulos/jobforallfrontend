import React, { useState } from "react";
import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import {signupJs } from "../redux/actions/auth";
import { EditJobseekerProfile } from "../redux/actions/profile";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import BasicForm from "./Jobseeker/signupcomponents/BasicForm";
import ContactForm from "./Jobseeker/signupcomponents/ContactForm";
import PersonalForm from "./Jobseeker/signupcomponents/PersonalForm";
import PaymentForm from "./Jobseeker/signupcomponents/PaymentForm";
import EducationForm from "./Jobseeker/signupcomponents/EducationForm";
import ExprianceForm from "./Jobseeker/signupcomponents/Expriance";
import AboutForm from "./Jobseeker/signupcomponents/AboutForm";
import useStyles from "./styles";

function getSteps() {
  return [
    "Basic information",
    "Personal Information",
    "Educational Level",
    "Expriance",
    "About"
  ];
}


function getStepContent(step,setPostData,postData) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PersonalForm setPostData={setPostData} postData={postData}/>;
    case 2:
      return <EducationForm />;
    case 3:
      return <ExprianceForm />;
    case 4:
      return <AboutForm/>;    
    default:
      return "unknown step";
  }
}


const JobseekerLS = () => {
  const [postData, setPostData] = useState({ selectedFile: '' });
  const {authData} = useSelector((state) => ({authData:state.auth.authData}))
  const [userId, setuserId] = useState(0)
  const navigate = useNavigate()
  const classes = useStyles()
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",

      user: "",
      name: "",
      adderss: "",
      phone: "",
      profile_photo: "",
      degree: "",
      grade: "",
      year:"",
      tempo:"",
      company_name:"",
      job_title:"",
      start_and_end_date:"",
      detail:"",
      skills:"",
      objective:"",
      project_title:"",
      project_description:"",
      achivement_and_award:"",
      activities:"",
      social_media:""
    },
  });
  
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const dispatch = useDispatch();
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => { 

    if (activeStep == steps.length - 1) {
        const form = {
          "user":authData.user.id,
        
          "name": data.name,
          "adderss": data.adderss,
          "phone": data.phone,
          "profile_photo":postData.selectedFile,
          "degree": data.degree,
          "grade": data.grade,
          "year":data.year,
          "tempo":data.tempo,
          "company_name":data.company_name,
          "job_title":data.job_title,
          "start_and_end_date":data.start_and_end_date,
          "detail":data.detail,
          "skills":data.skills,
          "objective":data.objective,
          "project_title":data.project_title,
          "project_description":data.project_description,
          "achivement_and_award":data.achivement_and_award,
          "activities":data.activities,
          "social_media":data.social_media
        }
      console.log(form)
      dispatch(EditJobseekerProfile(authData.user.id,form))
      setActiveStep(activeStep + 1);

    }else if(activeStep == 0){
       const form = {
        "username":data.username,
        "email":data.email,
        "password":data.password,
        "password2":data.password2
       }
        
      dispatch(signupJs(form))         
      setActiveStep(activeStep + 1);
      setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      console.log("hello there",form)
      // setuserId(authData)
      // console.log(authData)
    } else {
      setActiveStep(activeStep + 1);
      console.log(authData.user.id)

      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Container>
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
          <a
                  href="/signin"
                >
                  go to signin page
          </a>
        </Container>
       
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep,setPostData,postData)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default JobseekerLS;