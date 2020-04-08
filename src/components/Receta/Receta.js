import React, { useContext, useState } from 'react';

// Context
import { ModalContext } from '../../context/ModalContext';

// Material UI
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({ receta }) => {

    // Configuración del modal de material-ui
    const [ modaStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setReceta({});
        setIdReceta(null);
    }

    const { strDrink, strDrinkThumb, idDrink } = receta;

    const { setIdReceta, recetaData, setReceta } = useContext(ModalContext);

    /* NO FUNCIONA CON EL MODAL
    const handleClick = e => {      
        setIdReceta(idDrink);
        handleOpen();
    }
    */

  // Muestra y formatea la data
  const mostrarIngredientes = recetaData => {
    
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {

        if( recetaData[`strIngredient${i}`] ) {
            ingredientes.push(
                <li> { recetaData[`strIngredient${i}`] } { recetaData[`strMeasure${i}`] } </li>
            );
        }

    };

    return ingredientes;

  }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{ strDrink }</h2>
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="card-body">
                    <button 
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            setIdReceta(idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => handleClose()}
                    >
                        <div
                            style={modaStyle}
                            className={classes.paper}
                        >
                            <h2>{ recetaData.strDrink }</h2>
                            <h3 className="mt-3">Instrucciones</h3>
                            <p> 
                                { recetaData.strInstructions }
                            </p>
                            <img className="img-fluid my-4" src={recetaData.strDrinkThumb} alt={`Imagen de ${recetaData.strDrink}`} />

                            <h3>Ingredientes y Cantidades</h3>

                            <ul>
                                { mostrarIngredientes(recetaData) }
                            </ul>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;