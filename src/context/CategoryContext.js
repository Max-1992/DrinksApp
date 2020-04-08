import React, { createContext, useState, useEffect } from 'react';

// Axios
import axios from 'axios';

// Crear el Contexto.
export const CategoryContext = createContext();

// Crear Provider, el provider es donde se encuentran las funciones y el state.
const CategoryProvider = (props) => {

    // Crear el state del Context
    const initialStateCategory = [];
    const [categorys, setCategorys] = useState(initialStateCategory);

    // Crear UseEffect
    useEffect(() => {

        getCategorythecocktaildb();

    }, []);

    // Obtiene las categorias de la api de thecocktaildb.com
    const getCategorythecocktaildb = async () => {

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        try {
            // Realiza el request thecocktaildb.com
            const res = await axios.get(url);
            const categorys = res.data.drinks;
    
            // Almacena los datos en el state
            setCategorys(categorys);
            
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <CategoryContext.Provider
            value={{
                categorys
            }}
        >
            { props.children }
        </CategoryContext.Provider>
    )

};

export default CategoryProvider;