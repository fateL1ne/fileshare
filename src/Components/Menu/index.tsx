import React from 'react';
import styles from './styles';
import DescriptionIcon from '@material-ui/icons/Description';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    IconButton, 
    Typography, 
    Toolbar,
    AppBar 
} from '@material-ui/core';


interface Props {

}


export default function Menu( {} : Props ) {

    const classes = styles();
    
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
                </Toolbar>
            </AppBar>
        </div>
        <ToastContainer />
        </>
    );
}