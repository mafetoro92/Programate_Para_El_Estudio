import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormAspirant from "../formAspirant/FormAspirant";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./StepForm.scss";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Información Personal", "Estudios", "Motivación"];
}

function getStepContent(step) {

  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    document: "",
    numberDocument: "",
    pdf: "",
    email: "",
    phone: "",
    nationality: "",
    migrant: "",
    liveColombia: "",
    department: "",
    municipality: "",
    locality: "",
    addres: "",
    stratum: "",
    birth: "",
    age: "",
    birthTwo: "",
    sex: "",
    status: "",
    academicLevel: "",
    title: "",
    occupation: "",
    unemployed: "",
    employment: "",
    armedConflict: "",
    computer: "",
    logProgramate: "",
    accesComputer: "",
    profileSololearn: "",
    dreams: "",
    motivation: "",
  });
  
  const handeleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const sendData = () => {
  
    setData({
      firstName: "",
      secondName: "",
      firstSurname: "",
      secondSurname: "",
      document: "",
      numberDocument: "",
      pdf: "",
      email: "",
      phone: "",
      nationality: "",
      migrant: "",
      liveColombia: "",
      department: "",
      municipality: "",
      locality: "",
      addres: "",
      stratum: "",
      birth: "",
      age: "",
      birthTwo: "",
      sex: "",
      status: "",
      academicLevel: "",
      title: "",
      occupation: "",
      unemployed: "",
      employment: "",
      armedConflict: "",
      computer: "",
      logProgramate: "",
      accesComputer: "",
      profileSololearn: "",
      dreams: "",
      motivation: "",
    })
  
    console.log('enviando data', data)
  }

  switch (step) {
    case 0:
      return <Step1 data={data} handeleChange={handeleChange}/>;
    case 1:
      return <Step2 data={data} handeleChange={handeleChange}/> ;
    case 2:
      return <><Step3 data={data} handeleChange={handeleChange}/> <button className="btn btn-primary" type="submit" onClick={() => sendData()}>Enviar</button></>;
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component={'div'} className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography component={'div'} className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? null : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
