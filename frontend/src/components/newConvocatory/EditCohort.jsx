import React from 'react'
import {Link} from "react-router-dom";

const EditCohort = () => {
    return (
        <>
            <div className="containerNewTeam">
                <legend>Editar Cohorte.</legend>
                <div className="containerForm">
                    <div className="containerLabel">
                        <label for="disabledTextInput" class="form-label">
                            Nombre Cohorte
                        </label>
                        <input type="text" class="form-control" />
                    </div>

                    <div className="containerLabel">
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
                </div>

                <Link to="/editarcohorte"><button type="submit" class="btn btn-primary">Guardar cambios</button></Link>
            </div>
        </>
    )
}

export default EditCohort
