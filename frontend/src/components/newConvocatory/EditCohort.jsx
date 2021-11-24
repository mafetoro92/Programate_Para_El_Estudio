import React from "react";
import { Link } from "react-router-dom";

const EditCohort = () => {
    return (
        <>
            <div className="containerNewTeam">
                <legend>Editar Cohorte.</legend>
                <div className="containerForm">
                    <div className="containerLabel">
                        <label for="disabledTextInput" className="form-label">
                            Nombre Cohorte
                        </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="containerLabel">
                        <label for="disabledSelect" className="form-label">
                            Cupos
                        </label>
                        <input type="number" className="form-control" />
                    </div>

                    <div className="containerLabel">
                        <label for="disabledTextInput" className="form-label">
                            Fecha de inicio
                        </label>
                        <select></select>
                    </div>

                    <div className="containerLabel">
                        <label for="disabledTextInput" className="form-label">
                            Fecha de cierre
                        </label>
                        <select></select>
                    </div>

                    <div className="containerLabel">
                        <label for="disabledTextInput" className="form-label">
                            Inicio del Bootcamp
                        </label>
                        <select></select>
                    </div>

                    <div className="containerLabel">
                        <label for="disabledTextInput" className="form-label">
                            Cierre del Bootcamp
                        </label>
                        <select></select>
                    </div>
                </div>

                <Link to="/editarcohorte">
                    <button type="submit" className="btn btn-primary">
                        Guardar cambios
                    </button>
                </Link>
            </div>
        </>
    );
};

export default EditCohort;
