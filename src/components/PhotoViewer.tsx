import React, {useEffect} from 'react';
import usePhotoViewer from '../hooks/PhotoViewerHook';
import './PhotoViewer.css';

const PhotoViewer = (props) => {
    const pHook = usePhotoViewer();
    useEffect( () => {
        const showPhotoViewer = async () => {
            const imageList = props.attachment.imageList;
            const options = props.attachment.options;
            const mode = props.attachment.mode;
            const startFrom = props.attachment.startFrom;
            console.log(`imageList: ${JSON.stringify(imageList)}`);
            console.log(`mode: ${mode}`);
            console.log(`mode: ${startFrom}`);
            console.log(`options: ${JSON.stringify(options)}`);
            const ret = await pHook.show(imageList, mode, startFrom, options);
        };
        showPhotoViewer();
    });
    return (
        <div id="photoviewer-container" slot="fixed">
        </div>
    )
}
export default PhotoViewer