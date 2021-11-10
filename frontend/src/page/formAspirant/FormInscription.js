import React from "react";
import FormAspirant from "../../components/formAspirant/FormAspirant";
import "./FormInscription.scss";

function FormInscription() {
  return (
    <div className="section__inscription">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">Formulario de inscripción</span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i class="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">inscripción</span>
        </div>
      </div>
      <FormAspirant/>
    </div>
  );
}

export default FormInscription;
