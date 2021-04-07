import React, { useReducer } from 'react';
import styles from './styles';
import DescriptionIcon from '@material-ui/icons/Description';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    IconButton, 
    Typography, 
    Toolbar,
    AppBar, 
    Button
} from '@material-ui/core';
import { logout, initialState } from '../../Redux/userSlice';
import UserReducer from '../../Redux/userSlice';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UploadButton from '../Upload/Button';


interface MenuProps {

}


export default function Menu( {} : MenuProps ) {

    const [userState, dispatch] = useReducer(UserReducer, initialState);
    const classes = styles();

    function getOptionPanel() {
        if (userState.token) {
            return (
                <>
                    <Button 
                        color="primary"
                        variant="contained"
                        startIcon={<AccountCircleIcon/>} 
                        onClick={ () => dispatch(logout()) }
                    > Logout 
                    </Button>
                </>
            );    
        }
    }

    
    return (
        <>
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <DescriptionIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                            Fileshare
                    </Typography>
                    {  getOptionPanel() }
                </Toolbar>
            </AppBar>
        </div>
        <ToastContainer />
        </>
    );
}