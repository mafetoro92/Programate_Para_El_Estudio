import React from "react";
import "./Inscription.scss";
import ModalResults from "../../components/modals/ModalResults";
import MotivationLetterTable from "../../components/inscription/MotivationLetterTable";
import Filter from "../../components/filter/Filter";

const ResultsInscription = () => {
    return (
        <div className="section__aspirants">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Resultados</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs bold-500">Inscripción</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">
                        Calificación carta de motivación
                    </span>
                </div>
            </div>
            <div className="section__motivation">
                <div className="button__motivation">
                    <ModalResults />
                </div>
                <div>
                    <Filter />
                </div>
                <form action="">
                    <div className="wrap-input100__motivation validate-input mb-3 d-flex align-items-center">
                        <i className="fas fa-search" />
                        <input
                            className="input100__motivation"
                            type="text"
                            name="search"
                            placeholder="Buscar.."
                        />
                        <span className="focus-input100__motivation"></span>
                    </div>
                </form>
                <MotivationLetterTable />
            </div>
        </div>
    );
};

export default ResultsInscription;
