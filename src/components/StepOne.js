
import React from 'react';
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    InputLabel,
    FormControl,
    OutlinedInput,
    IconButton,
    InputAdornment,
    Visibility,
    VisibilityOff
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IntlTelInput from 'react-intl-tel-input';
import "react-intl-tel-input/dist/main.css";

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
    },
    inputField:{
        width:"100%",
        margin:"1rem 0"
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
                        className={classes.inputField}
                        label="Ismingiz"
                        variant="outlined"
                    />

                    <TextField 
                        className={classes.inputField}
                        label="Sharifingiz"
                        variant="outlined"
                    />

                    <IntlTelInput
                        preferredCountries={['uz']}
                    />

                    <TextField 
                        className={classes.inputField}
                        label="Imeylingiz"
                        variant="outlined"
                    />

                    <FormControl variant="outlined" className={classes.inputField}>
                        <InputLabel>Pasvordingiz</InputLabel>
                        <OutlinedInput 
                            labelWidth={75}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end"></IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
            </div>
           
        </div>
    )
}

export default StepOne
