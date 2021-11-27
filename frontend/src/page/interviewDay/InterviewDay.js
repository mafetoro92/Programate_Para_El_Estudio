import React, { useEffect, useState } from "react";
import "./Aspirants.scss";
import Tablita from "../../components/tablita/Tablita";
import RequestService from "../../config/index";
import ModalAspirants from "../../components/modals/ModalAspirants";

const InterviewDay = () => {
    const [citation, setCitation] = useState([]);
    const getDay = async () => {
        const { data } = await RequestService.get("/admin/citation");
        if (data) {
            setCitation(data);
        }
    };
    useEffect(() => {
        getDay();
    }, []);

    const actions = [
        {
            status: true,
            icon: <ModalAspirants />,
        },
    ];

    const rows = citation.map((interviewDay, idx) => ({
        ID: idx,
        Date: interviewDay.date,
        Journey: interviewDay.journey,
        MaxQuotas: interviewDay.maxQuotas,
        QuotasCompleted: interviewDay.quotasCompleted,
    }));

    return (
        <div className="spirants">
            <div className="spirants__content d-flex justify-content-between">
                <span className="upperCase bold"> Programate </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Citación </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Consolidado postulantes</span>
                </div>
            </div>
            <Link to="/dia-de-entrevista">Crear nueva jornada</Link>
            <div className="mt-4">
                <Tablita key={rows.length} rows={rows} actions={actions} />
            </div>
        </div>
    );
};

export default InterviewDay;
