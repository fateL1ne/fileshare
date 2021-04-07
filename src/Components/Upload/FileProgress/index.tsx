import { useState, useEffect } from 'react';
import { upload } from '../../../Services/Http/fileService';
import { getIcon } from '../../../Services/helperService';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';


interface Props {
    file : File
}


export default function FileProgress(props : Props) {

    const [ progress, setProgress ] = useState<number>(0);
    const [ completed, setCompleted ] = useState<boolean>(false);
    const progressSetter = (e : any) => setProgress(Math.round((100 * e.loaded) / e.total));


    useEffect(() => {
        upload(props.file, progressSetter)
            .then(() => {
                setCompleted(true);
            }).catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
        <Grid item xs={1}>
            { getIcon(props.file.type) }
        </Grid>
        <Grid item xs={8}>
            { props.file.name }
        </Grid>
        <Grid item xs={2}>
            {completed ? <DoneIcon style={{ color: green[500] }}/> :
                <CircularProgress variant="determinate" size="16px" value={progress}/>
            }   
        </Grid>
        <Grid item xs={12}>
            <LinearProgress variant="determinate" value={progress}/>
        </Grid>
        </>
    );
}