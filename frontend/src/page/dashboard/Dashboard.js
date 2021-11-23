import React from "react";
import FormAspirant from "../../components/formAspirant/FormAspirant";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="section__dash">
        <div className="section__content d-flex justify-content-between">
          <span className='upperCase bold'>Dashboard</span>
          <div className="box__content">
            <span className='text-crumbs bold-500'>Programate</span>
            <i className="fas fa-chevron-right subtitle"/>
            <span className='text-crumbs'>Dashboard</span>
          </div>
        </div>
        <FormAspirant/>
      </div>
    </>
  );
};

export default Dashboard;
