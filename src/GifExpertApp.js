import React, {useState} from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {

   
    const [categories, setCategories]= useState(["One punch"]);
    //setCategories es una funcion calllback que mantiene el ultimo estado del primer atributo
    /* const handleAdd = () =>{
       setCategories( [...categories,'HunterxHunter']);
    //    /*setCategories( cat=>[
    //        ...cat,'HunterxHunter'
    //    ]) //la funcion del ooks recibe un callback del estado anterior*/
     //}
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr/>
             {/* <button onClick= { handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                        key= { category }
                        category = { category }
                        />
                    })
                }
            </ol>
        </>
    )
}
