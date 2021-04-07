import React, {useEffect, useState} from 'react';
import { fetchAll } from '../../Services/Http/fileService';
import Menu from '../../Components/Menu/index';
import SearchBar from "material-ui-search-bar";
import { Container, Box } from '@material-ui/core';
import Document from '../../Components/Document/index';
import { Grid } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadButton from '../../Components/Upload/Button';
import UploadInfo from '../../Components/Upload/Info';

interface document {
    originalname: string,
    size: number,
    created: string,
    mimetype: string
}

export default function Documents() {
    
    const [documents, setDocuments] = useState<[document] | null>(null); 
    const [filter, setFilter] = useState<string>("");
    const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);

    useEffect(() => {
        console.log(documents)
    }, [documents])

    useEffect(() => {
        fetchAll()
            .then(res => {
                setDocuments(res.data)
            })
    }, []);

    function getDocumentsUI() {
        if (documents) {
            return documents.map((doc) => {
                return (
                    <Grid item>
                        <Document 
                            filename={doc.originalname} 
                            size={doc.size} 
                            created={doc.created}
                            mimetype={doc.mimetype}
                        />
                    </Grid>
                );
            })
        }
    }


    return (
        <> 
        <Menu />
        <ToastContainer />
        <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={6}>
                <Box m={2} p={5}>
                    <SearchBar value={filter} />  
                </Box>

                <Box m={2} p={2}>
                    <Grid container spacing={3}>
                        { documents && getDocumentsUI() }
                    </Grid>
  
                </Box>
                <Box m={4} p={10}>
                    <Grid container justify="flex-end">
                        <UploadButton onChangeHandler={setUploadFiles}/>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={3}>
                {uploadFiles && <UploadInfo files={uploadFiles}/>}
            </Grid>
        </Grid>
        </>
    );
}

