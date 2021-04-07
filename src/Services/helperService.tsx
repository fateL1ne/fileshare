import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ArchiveIcon from '@material-ui/icons/Archive';

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

export function formatSize(x : number) : string {
    let l = 0, n = x;
    
    while(n >= 1024 && ++l) {
        n = n/1024;
    }

    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}