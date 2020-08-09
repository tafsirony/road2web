import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
// in down this line it was LocalForm, we changed to form to make forms save data while changing other pages
import { Control, Form, Errors, actions } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   firstname: "",
    //   lastname: "",
    //   telnum: "",
    //   email: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   touched: {
    //     firstName: false,
    //     lastname: false,
    //     telnum: false,
    //     email: false,
    //   },
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value,
  //   });
  // }
  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Thank you for your feedback! " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.telnum,
      values.email,
      values.agree,
      values.contactType,
      values.message
    );
    // event.preventDefault(); // preventing going to next page
  }
  // handleBlur = (field) => (evt) => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true },
  //   });
  // };

  // validate(firstName, lastname, telnum, email) {
  //   const errors = {
  //     firstname: "",
  //     lastname: "",
  //     telnum: "",
  //     email: "",
  //   };
  //   if (this.state.touched.firstName && firstName.length < 3) {
  //     errors.firstname = "First Name Should be >=3 Character";
  //   } else if (this.state.touched.firstName && firstName.length > 10) {
  //     errors.firstname = "First Name Should be <= 10 Character";
  //   }

  //   if (this.state.touched.lastname && lastname.length < 3) {
  //     errors.lastname = "Last Name Should be >=3 Character";
  //   } else if (this.state.touched.lastname && lastname.length > 10) {
  //     errors.lastname = "Last Name Should be <= 10 Character";
  //   }
  //   const reg = /^\d+$/;
  //   if (this.state.touched.telnum && !reg.test(telnum)) {
  //     errors.telnum = "Tel. Number should contain only Numbers";
  //   }
  //   if (
  //     this.state.touched.email &&
  //     email.split("").filter((x) => x === "@").length !== 1
  //   ) {
  //     errors.email = "Email should contain a @";
  //   }
  //   return errors;
  // }

  render() {
    // const errors = this.validate(
    //   this.state.firstname,
    //   this.state.lastname,
    //   this.state.telnum,
    //   this.state.email
    // );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us!</h3>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-container">
          <div className="col-12">
            <h3 className="m-3">Send us your feedback</h3>
            <div className="col-12 col-md-9">
              <Form
                model="feedback"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <Row className="form-group">
                  <Label htmlFor="firstname" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".firstname"
                      id="firstname"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(10),
                      }}
                      name="firstname"
                      placeholder="First Name"
                      // value={this.state.firstname}
                      // valid={errors.firstname === ""}
                      // invalid={errors.firstname !== ""}
                      // onChange={this.handleInputChange}
                      // onBlur={this.handleBlur("firstname")}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required,
                        minLength: "Must be Greater than 3 Character",
                        maxLength: "Must be less than 10 Character",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="lastname" md={2}>
                    Last Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".lastname"
                      id="lastname"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(10),
                      }}
                      name="lastname"
                      placeholder="Last Name"
                      // value={this.state.lastname}
                      // valid={errors.lastname === ""}
                      // invalid={errors.lastname !== ""}
                      // onChange={this.handleInputChange}
                      // onBlur={this.handleBlur("lastname")}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required,
                        minLength: "Must be Greater than 3 Character",
                        maxLength: "Must be less than 10 Character",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="telnum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".telnum"
                      id="telnum"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(7),
                        maxLength: maxLength(11),
                        isNumber,
                      }}
                      name="telnum"
                      // placeholder="Tel. Number"
                      // value={this.state.telnum}
                      // valid={errors.telnum === ""}
                      // invalid={errors.telnum !== ""}
                      // onChange={this.handleInputChange}
                      // onBlur={this.handleBlur("telnum")}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required,
                        minLength: "Must be Greater than 7 Numbers",
                        maxLength: "Must be less than 12 Number",
                        isNumber: "Must be a phone number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".email"
                      id="email"
                      className="form-control"
                      validators={{
                        required,
                        validEmail,
                      }}
                      name="email"
                      placeholder="Email"
                      // value={this.state.email}
                      // valid={errors.email === ""}
                      // invalid={errors.email !== ""}
                      // onChange={this.handleInputChange}
                      // onBlur={this.handleBlur("email")}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required,
                        validEmail: "Invalid email address",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 6, offset: 2 }}>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".agree"
                          className="form-check-input"
                          name="agree"
                          // value={this.state.agree}
                          // onChange={this.handleInputChange}
                        />{" "}
                        <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Control.select
                      model=".contactType"
                      name="contactType"
                      className="form-control"
                      // value={this.state.contactType}
                      // onChange={this.handleInputChange}
                    >
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="message" md={2}>
                    Your Message
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".message"
                      id="message"
                      className="form-control"
                      name="message"
                      placeholder="Your Message"
                      rows="6"
                      // value={this.state.message}
                      // onChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </Form>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
