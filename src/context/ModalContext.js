import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = props => {

    // State provider
    const initialStateIdReceta = null;
    const [ idRecta, setIdReceta ] = useState(initialStateIdReceta);

    
    const initialStateReceta = {};
    const [ recetaData, setReceta ] = useState(initialStateReceta);

    useEffect(() => {

        if( !idRecta ) return;
        reqThecocktaildbIdDrink();

    }, [idRecta]);

    const reqThecocktaildbIdDrink = async () => {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecta}`;

        try {
            const res = await axios.get(url);
            const drink = res.data.drinks[0];
            setReceta(drink);
        } catch (error) {
            console.log(error);
        }
        
    }


    return(
        <ModalContext.Provider
            value={{
                recetaData,
                setIdReceta,
                setReceta
            }}
        >
            { props.children }
        </ModalContext.Provider>
    )
}

export default ModalProvider;