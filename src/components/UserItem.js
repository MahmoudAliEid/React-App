import React from "react";
function UserItem(props) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card ">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>{props.email}</p>
          <p>{props.number}</p>
          <a href="do" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
export default UserItem;
