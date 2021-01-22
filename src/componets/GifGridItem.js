import React from 'react'

export const GifGridItem = ( props ) => {
   
    return (
        <div className = "card animate__animated animate__bounce">
            {/* { img.title } */}
            <img src= { props.url} alt= {props.title} />
            <p>{props.title}</p>
        </div>
    )
}
