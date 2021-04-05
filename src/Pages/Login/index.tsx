import React, { useState, useEffect } from 'react';
import { login } from './../../Services/Http/userService';
import Menu from '../../Components/Menu/index';
import UserForm from '../../Components/UserForm/index';
import { Container, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectToken } from '../../Redux/userSlice';


export default function Login() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    function handleSubmit() : void {
        login( { email: email, password: password} )
            .then( res => {
                dispatch(setUser(res.data));

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
                        action="Login"
                        setEmail={setEmail}
                        setPassword={setPassword}
                        submitFunc={handleSubmit}
                    />
                </Grid>
            </Grid>  
        </Container>
        {token}
        </>
    );
}