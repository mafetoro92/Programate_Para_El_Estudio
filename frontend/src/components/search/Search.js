import React from "react";
import "./Search.scss";


const Search = ({ handeleChange, value }) => {
  return (
    <form action="" className="d-flex flex-column gap-1">
      <div className="wrap-input100 validate-input mb-3 d-flex align-items-center">
        <i className="fas fa-search" />
        <input
          type="text"
          onChange={handeleChange}
          value={value}
          placeholder="Buscar"
          className="form-control searchBox"
        />
        <span className="focus-input100"></span>
      </div>
    </form>
  );
};

export default Search;
