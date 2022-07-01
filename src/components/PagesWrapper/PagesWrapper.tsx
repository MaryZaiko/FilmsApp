import React, { FC } from "react";
import "./PagesWrapper.css";

import Sidebar from "../Sidebar";
import Header from "../Header";

const PagesWrapper = () => {
  return (
    <div className="pagesWrapperContainer pagesWrapperDark">
      <Sidebar />
    
        <Header />
 
    </div>
  );
};

export default PagesWrapper;
