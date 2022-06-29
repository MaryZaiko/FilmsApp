import React, { FC } from "react";
import "./PagesWrapper.css";

import Sidebar from "../Sidebar";
import Header from "../Header";

const PagesWrapper = () => {
  return (
    <div className="pagesWrapper pagesWrapperDark">
      <Sidebar />
      <div className="headerContent">
        <Header />
      </div>
    </div>
  );
};

export default PagesWrapper;
