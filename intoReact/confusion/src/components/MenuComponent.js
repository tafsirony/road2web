import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTextProps,
  CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    console.log("Menu Component constructor is invoked");
  }
  componentDidMount() {
    console.log("Menu Component componenDidMount is invoked");
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-4 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log("Menu Component render is invoked");
    return (
      <div className="container">
        <div className="row">
          {/* <Media list>{menu}</Media> */}
          {menu}
        </div>
      </div>
    );
  }
}

export default Menu;
