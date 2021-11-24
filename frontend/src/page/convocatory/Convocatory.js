import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Tablita";
import "./Convocatory.scss";
import RequestService from "../../config/index";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";

const Convocatory = () => {
    const [convocatories, setConvocatories] = useState([]);
    const getUser = async () => {
        const { data } = await RequestService.get("/admin/c");
        if (data) {
            setConvocatories(data);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const actions = [
        {
            status: true,
            icon: <i className="far fa-check-square"> </i>,
        },
        {
            status: true,
            icon: <i className="far fa-edit"></i>,
        },
        {
            status: false,
            icon: <i className="far fa-eye"> </i>,
        },
        {
            status: false,
            icon: <i className="far fa-trash-alt"> </i>,
        },
        {
            status: true,
            icon: <i class="fas fa-power-off"></i>,
        },
    ];

    const fixDate = (date) => {
        return date.split("T")[0];
    };

    const rows = convocatories.map((conv, idx) => ({
        ID: idx,
        Nombre: conv.name,
        Cupos: conv.maxQuotas,
        "Fecha de Inicio": fixDate(conv.initialDate),
    }));

    return (
        <>
            <div className="section__convocatory">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold"> Convocatoria </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">
                            {" "}
                            Programate{" "}
                        </span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs"> Convocatoria </span>
                    </div>
                </div>
                <NewConvocatory />
                <Tablita key={rows.length} rows={rows} actions={actions} />
            </div>
        </>
    );
};

export default Convocatory;
