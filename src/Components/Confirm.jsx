import React from "react";
import {Button , Stack , List , ListItem , ListItemText , AppBar , Container , Dialog} from '@mui/material';


export default function Confirm(props){

        const cont = (e) =>{
        e.preventDefault();
        props.nextStep();
    }
        const back = (e) =>{
            e.preventDefault();
            props.prevStep();
    }

    return( 
        <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
            <div>
            <Stack spacing={2}>

                <AppBar style={{padding: "10px"}}>Confirm user data</AppBar>
                <List>
                    <ListItem>
                        <ListItemText primary= "First Name" secondary={props.contactInfo.firstName}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary= "Last Name" secondary={props.contactInfo.lastName}/>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemText primary= "Email" secondary={props.contactInfo.email}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary= "City" secondary={props.contactInfo.city}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary= "Occupation" secondary={props.contactInfo.occupation}/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary= "Bio" secondary={props.contactInfo.bio}/>
                    </ListItem>
                </List>
                <br/>
                <Button
                    variant="contained"
                    label="Confirm & continue"
                    onClick={cont}
                    >
                    Confirm & continue
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