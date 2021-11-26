import React from "react";
import HorizontalLinearStepper from "../../components/stepForm/StepForm";
import "./FormInscription.scss";

function FormInscription() {
    return (
        <div className="inscription">
            <div className="section__content d-flex justify-content-between mb-4">
                <span className="upperCase bold">
                    Formulario de inscripción
                </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle"></i>
                    <span className="text-crumbs">inscripción</span>
                </div>
            </div>
            <HorizontalLinearStepper />
        </div>
    );
}

export default FormInscription;
