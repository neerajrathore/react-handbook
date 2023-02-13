import React from 'react'
import PhotoCard from './PhotosCard';
import usePhotos from './usePhotos'

// import { FixedSizeList } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
// import styled from 'styled-components'

const PhotosList = () => {
    const data = usePhotos();
    console.log(data, "photos data");
    return (
        <>
            {/* {photos.map((photo) => ( 
        //          <PhotoCard key={photo.id} photo={photo} />
            //         ))}
            // </div>
            */}
            {< PhotoCard photo={{ ...data }} ></PhotoCard>}
        </>
    )
}

export default PhotosList