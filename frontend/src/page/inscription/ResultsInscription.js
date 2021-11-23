import React from 'react';
import "./Inscription.scss"
import MotivationLetterModal from "../../components/inscription/MotivationLetterModal"

const ResultsInscription = () => {
    return (
        <div className="section__aspirants">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Resultados</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs bold-500">Inscripción</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Resultados</span>
                </div>
            </div>
            <MotivationLetterModal />
        </div>
    )
}

export default ResultsInscription
