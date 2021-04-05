import React, { useState, useEffect } from 'react';
import { register } from '../../Services/Http/userService';
import Menu from '../../Components/Menu/index';
import UserForm from '../../Components/UserForm/index';
import { Container, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';


export default function Register() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleSubmit() : void {
        register( { email: email, password: password} )
            .then( res => {
                toast.info(res.data);
            }).catch( err => {
                if (err.response) {
                    toast.error(err.response.data);
                } else {
                    toast.error("Unable to contact server");
                }
            })
    }

    return (
        <>
        <Menu />
        <Container maxWidth="sm">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh' }}
            >
                <Grid item xs={12}>
                    <UserForm
                        action="Register"
                        setEmail={setEmail}
                        setPassword={setPassword}
                        submitFunc={handleSubmit}
                    />
                </Grid>
            </Grid>  
        </Container>
        </>
    );
}