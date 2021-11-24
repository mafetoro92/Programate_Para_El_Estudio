import React from "react";
import "./NewCohort.scss";

const NewCohort = () => {
    return (
        <div className="containerNewTeam">
            <legend>Nueva Cohorte.</legend>

            <div className="containerInformationOne">
                <label for="disabledTextInput" className="form-label">
                    Nombre Cohorte
                </label>
                <input type="text" className="form-control" />
            </div>

            <div className="containerInformationOne">
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

            <button type="submit" className="btn btn-primary">
                Guardar cambios
            </button>
        </div>
    );
};

export default NewCohort;
