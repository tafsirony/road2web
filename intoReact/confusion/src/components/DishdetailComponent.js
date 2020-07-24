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

function RenderComments({ comments }) {
  //Get the comments array using props keyword
  if (comments != null) {
    const dishComments = comments.map((cmnts) => {
      //format the date as "Sep 06, 2014"
      let date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(Date.parse(cmnts.date)));

      return (
        <ul key={cmnts.id} className="list-unstyled">
          <li className="comment">{cmnts.comment}</li>
          <li className="author">
            -- {cmnts.author}, {date}
          </li>
        </ul>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <h4>Comments</h4>
          <div>{dishComments}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
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
            {/* <RenderComments cmnts={props.cmnts} /> */}
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default DishDetail;
