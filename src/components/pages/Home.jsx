import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
    const [imgs, setImgs] = useState([])

    const fetchImages = async () => {
        await fetch("http://localhost:5000/api/predict").then(res => res.json()).then(
            async data => {
                const imgs_enc = data['result']
                setImgs(imgs_enc)
            }
        )

    }
    useEffect(() => {
        fetchImages()
    }, [])

    return (
        <>
            {imgs.map((h) => {
                return <img src={`data:image/png;base64,${h}`} alt={h} />
            })}
        </>
    )
}

export default Home
