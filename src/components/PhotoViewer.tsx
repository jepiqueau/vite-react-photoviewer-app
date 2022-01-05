import React, {useEffect} from 'react';
import usePhotoViewer from '../hooks/PhotoViewerHook';
import './PhotoViewer.css';

const PhotoViewer = (props) => {
    const pHook = usePhotoViewer();
    useEffect( () => {
        const showPhotoViewer = async () => {
            const imageList = props.attachment.imageList;
            const options = props.attachment.options;
            console.log(`imageList: ${JSON.stringify(imageList)}`);
            console.log(`options: ${JSON.stringify(options)}`);
            const ret = await pHook.show(imageList,options);
        };
        showPhotoViewer();
    });
    return (
        <div id="photoviewer-container" slot="fixed">
        </div>
    )
}
export default PhotoViewer