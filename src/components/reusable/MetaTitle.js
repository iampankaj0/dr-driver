import React from "react";
import Helmet from "react-helmet";

const MetaTitle = ({ title }) => {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
};

export default MetaTitle;
