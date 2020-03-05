import React from "react";

// import { useParams } from "react-router-dom";

function UserDetail(props) {
  return (
    <div className="row">
      <div className="col-2">
        <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "10px", width: "80px" }} />
      </div>
      <div className="col-2">
        <p>{props.name}</p>
      </div>
      <div className="col-2">
        <p>{props.phone}</p>
      </div>
      <div className="col-4">
        <p>{props.email}</p>
      </div>
      <div className="col-2">
        <p>{props.DOB}</p>
      </div>
    </div>
  ); 
}

export default UserDetail;