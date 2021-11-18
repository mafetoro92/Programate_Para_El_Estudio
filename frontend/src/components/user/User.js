import React from "react";
import "./User.scss";
const User = ({ user, adminstate }) => {
    const { nameAdmin, loged } = adminstate;
    const { name, loged2 } = user;
    return (
        <div className="d-flex align-items-center pointer">
            <i className="far fa-user icon-user" />
            {loged && <span className="text-user">{nameAdmin}</span>}
            {loged2 && <span className="text-user">{name}</span>}
            <i className="fas fa-chevron-down icon-arrow" />
        </div>
    );
};

export default User;
