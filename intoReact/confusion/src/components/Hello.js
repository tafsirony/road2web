import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function Hello() {
  return (
  // <h1>I am funtional component</h1>
    
  <div className="row">
  <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/home">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>About Us</BreadcrumbItem>
  </Breadcrumb>
  <div className="col-12">
    <h3>About Us</h3>
    <hr />
  </div>
</div>
  );
}

export default Hello;
