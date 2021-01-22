//import React from 'react';

   export const getGifs = async ( category ) => {
         const url = `https://api.giphy.com/v1/gifs/search?api_key=13gwc7V2YEVAc9ym1Neu4k5iOWD6LLFD&q=${encodeURI ( category )}&limit=10`;
         const respuesta = await fetch ( url );
         const { data } = await respuesta.json();
        
         const gifs = data.map ( img => {
             return {
                 id : img.id,
                 title: img.title,
                 url: img.images.downsized_medium.url
             }
         })

        return gifs;
      

     }