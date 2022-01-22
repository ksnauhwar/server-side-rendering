import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Ooops, we don't have what you are looking for!</h1>;
};

export default { component: NotFoundPage };
