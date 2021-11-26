import React from "react";
import Tablita from "../tablita/Tablita";

const Citation = ({ rows }) => {
    const actions = [];
    console.log(rows);
    return (
        <div>
            <div className="citation">FECHA</div>
            <div className="citation">JORNADA</div>
            <div className="section__citation">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold"> Aspirantes </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs"> Aspirantes </span>
                    </div>
                    <Tablita key={rows.length} rows={rows} actions={actions} />
                </div>
            </div>
        </div>
    );
};

export default Citation;
