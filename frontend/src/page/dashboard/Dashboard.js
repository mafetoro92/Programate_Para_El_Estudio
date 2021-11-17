import React from "react";
<<<<<<< HEAD
=======
import FormAspirant from "../../components/formAspirant/FormAspirant";
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="section__dash">
        <div className="section__content d-flex justify-content-between">
          <span className='upperCase bold'>Dashboard</span>
          <div className="box__content">
<<<<<<< HEAD
            <span>Programate</span>
            <i className="fas fa-chevron-right subtitle"/>
            <span>Dashboard</span>
          </div>
        </div>
=======
            <span className='text-crumbs bold-500'>Programate</span>
            <i className="fas fa-chevron-right subtitle"/>
            <span className='text-crumbs'>Dashboard</span>
          </div>
        </div>
        <FormAspirant/>
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
      </div>
    </>
  );
};

export default Dashboard;
