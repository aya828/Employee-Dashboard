import React from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";

function UserDetail() {
  let { user } = useParams();
  let users = {};
  API.forEach( person => {
    if (person === user) {
      users = user
    }
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`Name: ${users.results.name.first} ${users.results.name.last}`}</h5>
        <p className="card-text">Phone: {users.results.phone}</p>
        <p className="card-text">Email: {users.results.email}</p>
        <p className="card-text">DOB: {users.results.dob}</p>
      </div>
    </div>
  );
  
}

export default UserDetail;