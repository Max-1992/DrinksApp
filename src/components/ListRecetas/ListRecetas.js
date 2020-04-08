import React, { useContext } from 'react';

// Context
import { RecetasContext } from '../../context/RecetasContext';
import Receta from '../Receta/Receta';

const ListRecetas = () => {

    const { recetas } = useContext(RecetasContext)

    return ( 
        
        <div className="row mt-4">
            {
                recetas.map( receta => <Receta key={receta.idDrink} receta={receta} /> )
            }
        </div>

     );
}
 
export default ListRecetas;