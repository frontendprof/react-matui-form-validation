
import React from 'react';
import {Typography,Button,Grid,Checkbox,TextField,InputLabel,FormControl,OutlinedInput} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles=makeStyles({
    mainContainer:{
        display:"grid",
        justifyContent:"center",
        position:"relative",
        zIndex:5
    },
    formContainer:{
        position:"relative",
        width:"28.125rem",
        height:"auto",
        padding:"2rem"
    }
})

const StepOne = () => {
    const classes=useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography variant="h5" style={{ color:"#999",textAlign:"center" }}>
                Sign Up with Email
            </Typography>

            <div className={classes.formContainer}>
                <form>
                    <TextField 
                        style={{ width:"100%", margin:"1rem 0" }}
                        label="First Name"
                        variant="outlined"
                    />

                    <TextField 
                        style={{ width:"100%", margin:"1rem 0" }}
                        label="Second Name"
                        variant="outlined"
                    />
                </form>
            </div>
           
        </div>
    )
}

export default StepOne
