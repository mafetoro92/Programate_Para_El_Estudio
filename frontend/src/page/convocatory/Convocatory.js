import React from "react";
import "./Convocatory.scss";

const Convocatory = () => {
    return (
        <>
            <div className="section__convocatory">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">Convocatoria</span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i class="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs">Convocatoria</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Convocatory;
