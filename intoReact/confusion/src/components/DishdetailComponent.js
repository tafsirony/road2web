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

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

renderComments(dish) {
    if (dish != null) {
      console.log(dish.comments);
      const dishComments = dish.comments.map((comment) => {
        return (
          <ul key={comment.id} className="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              --{comment.author},{new Date(comment.date).toDateString()}
            </li>
          </ul>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {dishComments}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  // const menu = this.props.dishes.map((dish) => {
  //   return (
  //     <div key={dish.id} className="col-12 col-md-4 m-1">
  //       <Card onClick={() => this.onDishSelect(dish)}>
  //         <CardImg width="100%" src={dish.image} alt={dish.name} />
  //         <CardImgOverlay body className="ml-5">
  //           <CardTitle heading>{dish.name}</CardTitle>
  //         </CardImgOverlay>
  //       </Card>
  //     </div>
  //   );
  // });

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
