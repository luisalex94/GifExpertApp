import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    console.log(category);
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(img => {
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    })
                },1500);
            });
    }, [category])

    return state; // {data: [], loading: true}
}
