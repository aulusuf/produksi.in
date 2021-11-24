import React from "react";

import CustomHeaderText from "../Components/CustomHeaderText";

const NotFound = (props) => {
  return (
    <div className="main-container">
      <div className="container">
        <CustomHeaderText title={"There is nothing in here."} />
      </div>
    </div>
  );
};

export default NotFound;
