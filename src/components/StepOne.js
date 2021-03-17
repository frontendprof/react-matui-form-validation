
import React,{useState} from 'react';
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
    InputAdornment} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SendSharpIcon from '@material-ui/icons/SendSharp';
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
    },
    btn:{
        width:"100%",
        height:"3rem",
        backgroundColor:"teal",
        color:"white",
        "&:hover":{
            backgroundColor:"teal",
            color:"gold"
        }
    }
})

const StepOne = () => {

    const[showPassVal,setShowPassVal]=useState(false);
    const[confirmPass,setConfirmPass]=useState(false);

    const handleshowPass=()=>{
        setShowPassVal(!showPassVal)
    }

    const handleConfirmPass=()=>{
        setConfirmPass(!confirmPass)
    }

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
                        <InputLabel >Pasvordingiz</InputLabel>
                        <OutlinedInput 
                            labelWidth={95}
                            type={showPassVal?"text":"password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={handleshowPass}>
                                        {showPassVal?<Visibility />:<VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.inputField}>
                        <InputLabel >Pasvordni Tasdiqlang</InputLabel>
                        <OutlinedInput 
                            labelWidth={155}
                            type={confirmPass?"text":"password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={handleConfirmPass}>
                                        {confirmPass?<Visibility />:<VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <>
                        <Button variant="contained" type="submit" className={classes.btn} endIcon={<SendSharpIcon />}>
                            Sign Up
                        </Button>
                    </>
                </form>
            </div>
           
        </div>
    )
}

export default StepOne
