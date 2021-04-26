import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getIcon, formatSize } from '../../Services/documentService';
import { Divider, Grid } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

interface Props {
    filename : string,
    size: number,
    created: string,
    mimetype: string
} 

export default function Document(props : Props) {

    return (
        <Card>
            <CardContent>
                <CardHeader
                    title={props.filename}
                    subheader={'Created: ' + new Date(props.created).toLocaleString()}
                />
                { getIcon(props.mimetype) }

                <Typography variant="body2" component="p">
                        {formatSize(props.size)}
                </Typography>

            </CardContent>
            <Divider/>
            <CardActions>
                <Button size="small">Download</Button>
                <Button size="small">Remove</Button>
            </CardActions>
        </Card>
    );
}
