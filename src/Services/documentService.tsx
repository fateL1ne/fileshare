import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArchiveIcon from '@material-ui/icons/Archive';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  toast } from 'react-toastify';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid, IconButton } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { remove } from './Http/fileService';
import { GridCellParams } from '@material-ui/data-grid';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export function getIcon(mimetype : string)  {
    switch(mimetype) {
        case 'application/pdf': return <PictureAsPdfIcon color="primary"/>;
        case 'image/png': return <ImageIcon color="primary"/>;
        case 'image/jpeg': return <ImageIcon color="primary"/>;
        case 'application/zip': return <ArchiveIcon color="primary" />;
        default: return <FileCopyIcon color="primary"/>
    }
}


export function getActions(filename: string, refresh : () => void) {
    return (
        <>
        <IconButton>
            <GetAppIcon color="primary"/>
        </IconButton>
        <IconButton>
            <ThumbUpIcon color="primary"/>
        </IconButton>
        <IconButton>
            <ThumbDownIcon color="primary"/>
        </IconButton>
        <IconButton  onClick={() => {
            remove(filename).then(() => {
                toast.success("Document was deleted");
                refresh();
            }).catch((err)=> {
                console.log(err)
                toast.error("Unable to delete document");
            })
        }}>
            <DeleteIcon color="primary"/>
        </IconButton>
        </>
    )
}
 

export function formatSize(x : number) : string {
    let l = 0, n = x;
    
    while(n >= 1024 && ++l) {
        n = n/1024;
    }

    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}