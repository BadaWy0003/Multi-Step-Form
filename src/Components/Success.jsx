import React from "react";
import {AppBar , Button , Stack , Container , Dialog} from '@mui/material';

export default function Success(props){

    return( 
        <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
                <div>
                    <Stack spacing={2}>
                        <AppBar style={{padding: "10px"}}>Success</AppBar>
                        <h1>Thank You For Your Submission!</h1>
                        <p>You will get an email with further instructions.</p>
                        <br/>

                        <Button
                            variant="outlined"
                            label="Reset"
                            onClick={props.reset} 
                            >
                            Fill another form
                        </Button> 
                    </Stack>
                </div>
            </Dialog>
    )
}