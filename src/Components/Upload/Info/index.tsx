import React, {useEffect, useState} from 'react';
import FileProgress from '../FileProgress/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PublishIcon from '@material-ui/icons/Publish';


interface Props {
    files : FileList,
    onUploads: () => void
}

export default function UploadInfo(props : Props) {

    const [ remainingUploads,  setRemainingUploads ] = useState<number>(props.files.length);   

    console.log("String with uploads " + remainingUploads);


    useEffect(() => {
        if (remainingUploads === 0) {
            setTimeout(() => {
                props.onUploads();
            }, 2000);
        } 
        console.log(remainingUploads);
    }, [remainingUploads])

    return (
        <>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "10%"}}> 
                            <PublishIcon color="primary"/> 
                        </TableCell>
                        <TableCell style={{ width: "80%"}}> Uploading ... </TableCell>
                        <TableCell style={{ width: "20%"}}> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {Array.from(props.files).map((file, ) => {
                    return (
                        <FileProgress file={file} key={file.name} onUpload={() => setRemainingUploads(remainingUploads - 1)} />
                    );
                })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}