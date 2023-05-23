import React from "react";
import {Button , Stack , TextField , AppBar , Toolbar , Container , Dialog} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';

export default function FormUserDetails(props){

        const cont = (e) =>{
        e.preventDefault();
        props.nextStep();
    }
    return(

        //<ThemeProvider>
     
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <div>
                <Stack spacing={2}>
                    <AppBar style={{padding: "10px"}}>
                        Enter user details
                    </AppBar>
                    <TextField
                        name="firstName"
                        label="First name"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.firstName}
                    />
                    <br/>
                    <TextField
                        name="lastName"
                        label="Last name"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.lastName}
                    />
                    <br/>
                    <TextField
                        name="email"
                        label="email"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.email}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        label="Continue"
                        onClick={cont}
                        >
                        Continue
                    </Button>    
                </Stack>
            </div>
            </Dialog>
         
        //</ThemeProvider>
    )
}