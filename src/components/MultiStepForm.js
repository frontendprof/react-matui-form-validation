
import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Stepper,Step,StepLabel,Typography,Button} from "@material-ui/core";


const useStyles=makeStyles({
    root:{
        width:"50%",
        margin:"6rem auto",
        border:"1px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active":{
            color:"darkblue"
        }
    }
})


const MultiStepForm = () => {

    function getSteps(){
        return ['SIGN UP','CHOOSE PLAN','CHECKOUT']
    }
    const steps=getSteps();
    const classes=useStyles();
    return (
        <div>
            <h3>Main Component</h3>
            <Stepper alternativeLabel className={classes.root}>
                {steps.map(step=>(
                    <Step key={step}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
            ))}
            </Stepper>
            
        </div>
    )
}

export default MultiStepForm
