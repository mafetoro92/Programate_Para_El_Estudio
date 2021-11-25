import React from "react";
import NewCohort from "../../components/newConvocatory/NewCohort ";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import TableConvocatory from "../../components/tables/TableConvocatory";
import ModalConvocatory from "../../components/modals/ModalConvocatory";
//import Button from '@mui/material/Button';
import "./Convocatory.scss";

const Convocatory = () => {
    return (
        <>
            <div className="section__convocatory">
                <div className="section__content mb-5 d-flex justify-content-between">
                    <span className="upperCase bold">Convocatorias</span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs">Convocatoria</span>
                    </div>
                </div>
                <ModalConvocatory />
                <NewConvocatory />
                {/* <TableConvocatory /> */}
            </div>
        </>
    );
};

export default Convocatory;
