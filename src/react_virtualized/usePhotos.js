// a hook that do all the processing photos part

import React from 'react'
import { useEffect, useState } from 'react'

const usePhotos = () => {
    const [photos, setPhotos] = useState(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=1000")
            .then((res) => res.json())
            .then((photosData) => {
                setPhotos(photosData)
            })
    }, [])
    return {
        photos
    }
}

export default usePhotos