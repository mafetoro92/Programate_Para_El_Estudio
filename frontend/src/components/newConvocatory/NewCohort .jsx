import React from 'react'
import "./NewCohort.scss"

const NewCohort = () => {
    return (
        <div className="containerNewTeam">

            <legend>Nueva Cohorte.</legend>

            <div className="containerInformationOne">
                <label for="disabledTextInput" class="form-label">
                    Nombre Cohorte
                </label>
                <input type="text" class="form-control" />
            </div>

            <div className="containerInformationOne">
                <label for="disabledSelect" class="form-label">
                    Cupos
                </label>
                <input type="number" class="form-control" />
            </div>

            <div className="containerLabel">
                <label for="disabledTextInput" class="form-label">
                    Fecha de inicio
                </label>
                <select>
                    
                </select>
            </div>

            <div className="containerLabel">
                <label for="disabledTextInput" class="form-label">
                    Fecha de cierre
                </label>
                <select>
                    
                </select>
            </div>

            <div className="containerLabel">
                <label for="disabledTextInput" class="form-label">
                    Inicio del Bootcamp
                </label>
                <select>
                    
                </select>
            </div>

            <div className="containerLabel">
                <label for="disabledTextInput" class="form-label">
                    Cierre del Bootcamp 
                </label>
                <select>
                    
                </select>
            </div>
        

        <button type="submit" class="btn btn-primary">
            Guardar cambios
        </button>
            
        </div>
            
    )
}

export default NewCohort
