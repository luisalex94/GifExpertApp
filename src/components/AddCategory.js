import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCat }) => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    const hanleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCat(cateX => [inputValue, ...cateX]);
            setInputValue('');
            console.log('Submit hecho')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    //Atributos:
                    type="text"
                    value={inputValue}
                    onChange={hanleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired
}

