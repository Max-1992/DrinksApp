import React, { useContext, useState } from 'react';

// Import Context
import { CategoryContext } from '../../context/CategoryContext';
import { RecetasContext } from '../../context/RecetasContext';

const Form = () => {

    // UseContext extraer datos.
    const { categorys } = useContext(CategoryContext);
    const { setBuscar } = useContext(RecetasContext);

    // Create State Search
    const initialStateSearch = {
        name: '',
        category: ''

    };
    const [search, setsearch] = useState(initialStateSearch)

    // handleChange
    const handleChange = e => {
        
        setsearch({
            ...search,
            [e.target.name]: e.target.value
        });

    };

    // handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Se ejecuto el submit');
       
        setBuscar(search);
        
    }

    return ( 
        <form
            className="col-12"
            onSubmit={handleSubmit}
        >
            <fieldset className="text-center mb-4">
                <legend>Buscar bebidas por categoria</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleChange}
                    />
                </div>            
                <div className="col-md-4">
                    <select
                        name="category"
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option value=""> -- Seleccionar Categoría -- </option>
                       {
                           categorys.map( category => <option key={category.strCategory} value={category.strCategory}> { category.strCategory } </option> )
                       }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;