import React from 'react';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface Props {
    onChangeHandler : ( file: FileList | null ) => void 
}

export default function UploadButton(props : Props) {

    return (
        <Button component="label" variant="contained" color="primary" startIcon={<CloudUploadIcon/>} > 
            Upload
            <input type="file" multiple onChange={(e) => { props.onChangeHandler(e.target.files) }} hidden/>
        </Button>
    );
}

