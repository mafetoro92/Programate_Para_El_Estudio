import React from "react";
import { PROFILE_SOLOLEARN } from "../../api/data";

import "./DashboardAspirant.scss";
import Torta from "./Torta";

function DashboardAspirant() {
  console.log('desde aca', PROFILE_SOLOLEARN);

  return (
    <div className="section__dash">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">Dashboard Aspirante</span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Dashboard</span>
        </div>
      </div>

      <div className="d-flex flex-wrap">
      {PROFILE_SOLOLEARN.map((item) => (
        <Torta key={item.userFullName} item={item} />
      ))}
      {PROFILE_SOLOLEARN.map((item) => (
        <Torta key={item.userFullName} item={item} />
      ))}
      {PROFILE_SOLOLEARN.map((item) => (
        <Torta key={item.userFullName} item={item} />
      ))}
      {PROFILE_SOLOLEARN.map((item) => (
        <Torta key={item.userFullName} item={item} />
      ))}
      </div>

      {/* <BarChart/> */}
    </div>
  );
}

export default DashboardAspirant;
