import React from "react";
import "./style.scss";

const NotFound = () => (
  <div className="NotFound">
    <h1 className="NotFound__calling">404 - NOT FOUND!</h1>
    <div className="NotFound__message">
      You just hit a route that doesn't exist... the sadness.
    </div>
  </div>
);

export default NotFound;
