import React from "react";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="section__dash">
        <div className="section__content d-flex justify-content-between">
          <span className='upperCase bold'>Dashboard</span>
          <div className="box__content">
            <span>Programate</span>
            <i className="fas fa-chevron-right subtitle"/>
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
