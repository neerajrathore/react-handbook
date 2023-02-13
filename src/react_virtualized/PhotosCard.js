import React from 'react';
// import Photo from './Photo';
// import styles from './PhotoCard.module.scss';

const PhotoCard = ({ photo }) => {
    photo = photo.photos
    console.log(photo, "defdswefdwe");
    return (
        <>
            {photo &&
                photo.map((photo) => {
                    return(
                    <div>
                        <a href={photo.url}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </a>
                        <p>{photo.title}</p>
                    </div>
                    )
                })

            }
        </>
    );
};

export default PhotoCard;