import React, {useEffect, useState} from 'react';
import { fetchAll } from '../../Services/Http/fileService';
import Menu from '../../Components/Menu/index';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadButton from '../../Components/Upload/Button';
import UploadInfo from '../../Components/Upload/Info';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import { formatSize, getIcon, getActions } from '../../Services/documentService';



export default function Documents() {
    
    const [documents, setDocuments] = useState<GridRowsProp>([]); 
    const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    const renderActions = (params : any) => { return getActions(params.value, fetchDocuments); }
    const dateFormatter = (date : any) => { return new Date(date.value).toLocaleString(); }
    const formatBytes = (params : any) => { return formatSize(params.value) }
    const renderMimetypeCell = (params : any) => { return getIcon(params.value) }


    const columns : GridColDef[] = [
        { field: 'mimetype', headerName: 'MIME', width: 50, renderCell: renderMimetypeCell },
        { field: 'originalname', headerName: 'FILE', type: 'string', width: 300, headerAlign: 'left' },
        { field: 'size', headerName: 'SIZE', type: 'string', width: 200, headerAlign: 'left', valueFormatter: formatBytes },
        { field: 'created', headerName: 'CREATED', width: 180, headerAlign: 'center', valueFormatter: dateFormatter },
        { field: 'filename', headerName: 'ACTIONS', width: 250, headerAlign: 'center', renderCell: renderActions }
    ] 

    function fetchDocuments() {
        fetchAll().then(res => {
            Array.from(res.data).forEach( (doc : any) => {
                doc.id = doc.filename;
            });
            setDocuments(res.data);
        })
    }

    function onUpload() {
        setUploadFiles(null);
        toast.success("Successfully uploaded");
        fetchDocuments();
    }

    useEffect(() => {
        if (documents) {
            setLoaded(true);
        }
    }, [documents])

    
    useEffect(() => {
        fetchDocuments();
    }, []);


    return (
        <> 
        <Menu />
        <ToastContainer />
        <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={6}>
                <Box m={2} p={1}>
                    <div style={{ height: 800, width: '100%' }}>
                        { loaded && <DataGrid rows={documents} columns={columns} pageSize={25}  /> }
                    </div>
                </Box>
                <Box m={2} p={2}>
                    <Grid container justify="flex-end">
                        <UploadButton onChangeHandler={setUploadFiles}/>
                    </Grid>
                </Box>  
            </Grid>
            <Grid item xs={3} style={{ alignItems: "center"}}>
                <Box m={2} p={5}>
                    {uploadFiles && <UploadInfo files={uploadFiles} onUploads={onUpload}/>}
                </Box>
            </Grid>
        </Grid>
        </>
    );
}

