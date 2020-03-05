import React from "react";
import Moment from 'react-moment';
// import { useParams } from "react-router-dom";

function UserDetail(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image</h5>
          <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h5 className="card-title">Name</h5>
          <p>{props.name}</p>
        <h5 className="card-title">Phone</h5>
          <p>{props.phone}</p>
        <h5 className="card-title">Email:</h5>
          <p>{props.email}</p>
        <h5 className="card-title">DOB</h5>
          <Moment format="DD/MM/YYYY">
            <p>{props.DOB}</p>
          </Moment>
      </div>
    </div>
  ); 
}

export default UserDetail;