import React from 'react';
import { Paper, Button, TextField, Grid, Box } from '@material-ui/core';


interface Props {
    action: string,
    setEmail : (value : string) => any,
    setPassword : (value : string) => any,
    submitFunc : () => void
}


export default function UserForm(props : Props) {
    return (
        <Paper elevation={3}>
            <Box p={2}>
            <Grid container spacing={2} direction="column">
                <Grid xs={12} item>
                    <TextField fullWidth={true} 
                        onChange={(e) => props.setEmail(e.target.value)} 
                        placeholder="Email" 
                        label="Email" 
                        type="email" 
                        variant="outlined" 
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField fullWidth={true} 
                        onChange={(e) => props.setPassword(e.target.value)} 
                        placeholder="Password" 
                        label="Password" 
                        type="password" 
                        variant="outlined" 
                    />
                </Grid>
                <Grid xs={12} item>
                    <Button variant="contained" color="primary" onClick={props.submitFunc} fullWidth={true}>
                        {props.action}
                    </Button>                  
                </Grid>
            </Grid>
            </Box>
        </Paper>
    );
}