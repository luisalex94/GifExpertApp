import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [cate, setCat] = useState(['Goku']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCat={setCat} />
            <hr />
            <ol>
                {
                    cate.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;