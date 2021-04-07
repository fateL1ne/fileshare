import React, { useState, useReducer } from 'react';
import { login } from './../../Services/Http/userService';
import Menu from '../../Components/Menu/index';
import UserForm from '../../Components/UserForm/index';
import { Container, Grid } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import { setUser, initialState } from '../../Redux/userSlice';
import UserReducer from '../../Redux/userSlice';
import { useHistory } from "react-router-dom";


export default function Login() {

    const [userState, dispatch] = useReducer(UserReducer, initialState);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const history = useHistory();

    function handleSubmit() : void {
        login( { email: email, password: password} )
            .then( res => {
                dispatch(setUser(res.data));
                toast.info("Login successfully");
                history.push("/documents");
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
        <ToastContainer/>
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
        </>
    );
}