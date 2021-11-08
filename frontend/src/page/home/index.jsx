import React from "react";
import Header from "../../container/header/Header";
import Nav from "../../container/Nav/Nav";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0">
          <div className="col-2">
            <Nav />
          </div>
          <div className="col-10">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
