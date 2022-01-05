import { useCallback } from 'react';
import { PhotoViewer } from '@capacitor-community/photoviewer';
  
const usePhotoViewer = () => {
        const echo = useCallback(async (value) => {
            if (value) {
                const r = await PhotoViewer.echo({value});
                if (r) {
                    return r;
                }
                else {
                    return { value: null };
                }
            }
            else {
                return { value: null };
            }
        });
        const show = useCallback(async (images, options) => {
            if (images == null || images.length === 0) {
                return Promise.reject(new Error('Must provide an image or an image Array '));
            }
            let opts = {images: images};
            if (options != null && Object.keys(options).length != 0 ) {
                opts.options = options;
            }
            const r = await PhotoViewer.show(opts);
            if (r) {
                if(r.result) {
                    return r
                } else {
                    return Promise.reject(new Error(`Show: ${r.message}`));
                }
            } else {
                return Promise.reject(new Error('Show: No result returned'));
            }

        });
    return { echo, show };
}
export default usePhotoViewer;