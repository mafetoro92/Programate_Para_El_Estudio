import React from "react";
import './InterviewAspirant.scss';

const InterviewAspirant = () => {
  return (
    <div className="section__interview">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">Agenda de Entrevista y assessment</span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i class="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Entrevista</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewAspirant;
