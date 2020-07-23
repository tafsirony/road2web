import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle heading>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ cmnts }) {
  // if (cmnts != null) {
    const dishComments = cmnts.map((comment) => {
      return (
        <ul key={comment.id} className="list-unstyled">
          <li>{comment.comment}</li>
          <li>
            {/* --{comment.author},{new Date(comment.date).toDateString()} */}
            --{comment.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
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
  // } else {
  //   return <div></div>;
  // }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments cmnts={props.cmnts} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default DishDetail;
