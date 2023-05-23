import React from "react";

import {Button , Stack , TextField , AppBar , Container , Dialog} from '@mui/material';


export default function FormPersonalDetails(props){

        const cont = (e) =>{
        e.preventDefault();
        props.nextStep();
    }
        const back = (e) =>{
            e.preventDefault();
            props.prevStep();
    }
    console.log(props.contactInfo)

    return( 
        <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
            <div>
                <Stack spacing={2}>
                    <AppBar style={{padding: "10px"}}>Enter personal details</AppBar>
                    <TextField
                        name="bio"
                        label="Bio"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.bio}
                    />
                    <br/>
                    <TextField
                        name="city"
                        label="City"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.city}
                    />
                    <br/>
                    <TextField
                        className="txt"
                        name="occupation"
                        label="Occupation"
                        onChange={props.handleChange}
                        defaultValue={props.contactInfo.occupation}
                    />
                    <br/>
                
                    <Button
                        variant="contained"
                        label="Continue"
                        onClick={cont}
                        >
                        Continue
                    </Button>

                    <Button
                        variant="outlined"
                        label="Back"
                        onClick={back}
                        >
                        Back
                    </Button>  
                </Stack>  

            </div>
            </Dialog>
    )
}