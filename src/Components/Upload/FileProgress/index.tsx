import { useState, useEffect } from 'react';
import { upload } from '../../../Services/Http/fileService';
import { getIcon } from '../../../Services/documentService';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { Grid, TableCell, TableRow } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';



interface Props {
    file : File,
    onUpload: () => void
}


export default function FileProgress(props : Props) {

    const [ progress, setProgress ] = useState<number>(0);
    const [ completed, setCompleted ] = useState<boolean>(false);
    const [ success, setSuccess ] = useState<boolean>(false);
    const progressSetter = (e : any) => setProgress(Math.round((100 * e.loaded) / e.total));

    useEffect(() => {
        if (completed) {
            console.log('Completed upload: ' + props.file.name)
            props.onUpload();
        }
    }, [completed])


    useEffect(() => {
        upload(props.file, progressSetter)
            .then(() => {
                setSuccess(true);
            })
            .catch(err => {  
                console.log(err);
            }).finally(() => {
                setCompleted(true);
            })
    }, [])


    return (
        <TableRow>
            <TableCell> {getIcon(props.file.type)} </TableCell>
            <TableCell> {props.file.name} </TableCell>
            <TableCell>
            {completed ? <DoneIcon style={{ color: green[500] }}/> :
                <CircularProgress variant="determinate" size="16px" value={progress}/>
            }   
            </TableCell>
        </TableRow> 
    );
}