import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGif';
export const GifGrid = ( {category} ) => {
 
   const {data,loading} =  useFetchGifs( category );
   
     //const [images, setImages] = useState([]);

   /* useEffect ( ()=> {
      getGifs( category )
        .then ( imgs => setImages(imgs))
        
    },[category])*/
   
  
    
    return (
        <>
        <h3>{category}</h3>
         
         <div className="card-grid">
           
           {loading && <p className="animate__animated animate__flash">Loading</p>}
          
                {
                    data.map((images) => 
                    
                        <GifGridItem
                        key= {images.id}
                        {...images} />
                        
                    )
                }
            
        </div>
        </>
    )
}
