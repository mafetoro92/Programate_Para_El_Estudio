import React, { useState } from "react";
import "./DisableBton.scss";

const DisableBtn = () => {
    const [disable, setDisable] = useState(false);

    return (
        <div>
            <div
                className={disable ? "disable" : "able"}
                onClick={() => setDisable(!disable)}
            >
                <i className="fas fa-power-off"></i>
            </div>
        </div>
    );
};

export default DisableBtn;
