import { Divider, Grid } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import FileProgress from '../FileProgress/index';


interface Props {
    files : FileList
}

export default function UploadInfo(props : Props) {

    return (
        <Grid direction="column">
            <Grid item xs={12}>
                Uploading ...
            </Grid>
            <Divider/>
            {Array.from(props.files).map((file) => {
                return <FileProgress file={file} />
            })}
        </Grid>

    );

}