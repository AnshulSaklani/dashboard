import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from "./Dashboard";
import MainContent from "./MainContent";
import './Fitpeo.css';

function Fitpeo() {
  return (
    <div className="row appscreen">
      <Dashboard />
      <MainContent />
    </div>
  );
}

export default Fitpeo;
