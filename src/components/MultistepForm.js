
import React,{ useState } from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Stepper,Step,StepLabel,Typography,Button} from "@material-ui/core";



const useStyles=makeStyles({
    root:{
        width:"50%",
        margin:"6rem auto",
        border:"1px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active":{
            color:"teal"
        }
    }
})


const MultistepForm = () => {

    const [activeStep,setActiveStep]=useState(0)

    function getSteps(){
        return ['SIGN UP','CHOOSE PLAN','CHECKOUT']
    }

    const handleNext=()=>{
        setActiveStep(prevActiveStep=>prevActiveStep+1);
    }


    const steps=getSteps();

    function getStepsContent(stepIndex){
        switch(stepIndex){
            case 0:
                return "Step One (SIGN UP)";
            case 1:
                return "Step Two (CHOOSE PLAN)";
            case 2:
                return "Step Three (CHECKOUT)";
            default: return "Unknown step"
        }
    }




    const classes=useStyles();
    return (
        <div className={classes.root} >
            <h3>Main Component</h3>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map(step=>(
                    <Step key={step}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
            ))}
           
            </Stepper>
            <br/>
            <>
                {activeStep===steps.length?"The steps completed":(
                    <>
                        {getStepsContent(activeStep)}
                        <button onClick={handleNext}>
                            {activeStep===steps.length?"Finish":"Next"}
                        </button>

                    </>
                )}
            </>
            
        </div>
    )
}

export default MultistepForm
