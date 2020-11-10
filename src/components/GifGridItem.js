import React from 'react'

export const GifGridItem = ({ title, url }) => {

    // Podriamos haber recibido como props el id,title, url

    return (
        <div className="animate__animated animate__pulse">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
