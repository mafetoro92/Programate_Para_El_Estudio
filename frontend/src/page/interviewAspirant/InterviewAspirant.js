import React, { useState } from "react";
import CalendarView from "../../components/calendar/CalendarView";


import "./InterviewAspirant.scss";

const InterviewAspirant = ({ user, adminstate }) => {

  return (
    <div className="interview">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">
          Agenda de Entrevista y assessment
        </span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Entrevista</span>
        </div>
      </div>
      <div className="calendar mt-4">
        <CalendarView user={user} adminstate={adminstate} />
      </div>
    </div>
  );
};

export default InterviewAspirant;
