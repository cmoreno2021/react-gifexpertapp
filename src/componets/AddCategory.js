import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( props ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{

        setInputValue ( e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2)
        props.setCategories( cats => [inputValue,...cats]);
        setInputValue('');
    }
    return (
        <>
            <h1>{inputValue}</h1>
            <h2>Add Category</h2>
           
            <form onSubmit= { handleSubmit }>
                <input
                type="text"
                value={ inputValue }
                onChange= { (e) => { handleInputChange(e) }}
                />
            </form>
        </>
    )
}

AddCategory.propTypes= {
    setCategories : PropTypes.func.isRequired
}