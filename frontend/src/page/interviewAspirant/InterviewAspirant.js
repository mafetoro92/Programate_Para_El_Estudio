import React, { useContext, useEffect } from "react";
import './InterviewAspirant.scss';
import { providerContext } from '../../Context/status'

const InterviewAspirant = () => {
  const { getProfiles, profiles, getProfile, profileT, convocatorys } = useContext(providerContext)
  useEffect(() => {
    getProfiles();
    // getProfile("618c352d3ad3f3933bfb3b59")
  }, [])
  console.log(profileT)
  return (
    <div className="section__interview">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">Agenda de Entrevista y assessment</span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Entrevista</span>
        </div>
      </div>

    </div>
  );
};

export default InterviewAspirant;
