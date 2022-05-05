import React, { useState } from "react";
import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";
import { signupEm } from "../redux/actions/auth";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditEmployerProfile } from "../redux/actions/profile";
import useStyles from "./styles";
import BasicForm from "./Employer/signupcomponents/signupcomponents/BasicForm";
import PersonalForm from "./Employer/signupcomponents/signupcomponents/PersonalForm";
import AboutForm from "./Employer/signupcomponents/signupcomponents/AboutForm";

function getSteps() {
  return [
    "Basic information",
    "Company Information",
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
      return <AboutForm/>;    
    default:
      return "unknown step";
  }
}
const EmployerLS = () => {
  const [postData, setPostData] = useState({ selectedFile: '' });
  const {authData} = useSelector((state) => ({authData:state.auth.authData}))
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const classes = useStyles();

  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",

      user: "",
      company_name: "",
      adderss: "",
      phone: "",
      profile_photo: "",
      description: "",
      website:"",
      objective:"",
      achivement_and_award:"",
      activities:"",
      social_media:""
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

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
        "company_name":data.company_name,
        "adderss": data.adderss,
        "phone": data.phone,
        "profile_photo": postData.selectedFile,
        "description": data.description,
        "website":data.website,
        "objective":data.objective,
        "achivement_and_award":data.achivement_and_award,
        "activities":data.activities,
        "social_media":data.social_media
      }
      console.log(form)
      dispatch(EditEmployerProfile(authData.user.id,form))
      
      setActiveStep(activeStep + 1);

    }else if(activeStep == 0){
        const form = {
          "username":data.username,
          "email":data.email,
          "password":data.password,
          "password2":data.password2
        }
        dispatch(signupEm(form))         
        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );   
        console.log(form)

    } else {
      setActiveStep(activeStep + 1);
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

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
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

export default EmployerLS;