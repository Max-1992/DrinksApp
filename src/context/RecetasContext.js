import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = props => {

    const initialStateSearch = {};
    const [buscar, setBuscar] = useState(initialStateSearch);

    const initialStateRecetas = [];
    const [recetas, setRecetas] = useState(initialStateRecetas);



    useEffect(() => {

        if( Object.keys(buscar).length === 0 ) return;
        getThecocktaildbIngredient();

    }, [buscar] );

    const getThecocktaildbIngredient = async () => {

        const { name, category } = buscar;

        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        try {
            const res = await axios.get(url);
            const recetasData = res.data.drinks;
            setRecetas(recetasData);

            console.log(recetasData);
            

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <RecetasContext.Provider
            value={{
                recetas,
                setBuscar
            }}
        >
            { props.children }
        </RecetasContext.Provider>

    );
}

export default RecetasProvider;