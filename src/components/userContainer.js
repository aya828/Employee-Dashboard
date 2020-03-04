import React, { Component } from "react";
import API from "../utils/API";
import UserDetail from "./userDetail";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: ""
    }
  }

  componentDidMount(results) {
    this.displayUser(results);
  }

  displayUser = query => {
    API.search(query).then(res =>
      this.setState({
        results: res.data
      })).catch(err => console.log(err));
      console.log(query);

  }

  searchUser = query => {
    API.search(query)
      .then(res =>
        this.setState({ result: res.data}))
        .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleUserSubmit = event => {
    event.preventDefault();
    this.searchUser(this.state.search);
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Use the search box to narrow your results</p>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search a user" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      
      <div className="card">
      <div className="card-body">
      {this.state.result.Title ? (
        <UserDetail
          src={this.state.results.picture.thumbnail}
          name={`${this.state.results.Title}${this.state.results.name.last}`}
          phone={this.state.results.phone}
          email={this.state.results.email}
          DOB={this.state.results.dob}
        />
      ) : (
        <h3>No Results to Display</h3>
      )}
          {/* <h5 className="card-title">Name</h5>
            <p>{`${this.state.results.name.first} ${this.state.results.name.last}`}</p>
          <h5 className="card-title">Phone</h5>
            <p className="card-text">{this.state.results.phone}</p>
          <h5 className="card-title">Email:</h5>
            <p className="card-text">{this.state.results.email}</p>
          <h5 className="card-title">DOB</h5>
            <p className="card-text">{this.state.results.dob}</p>*/}
        </div> 
      </div>
      </div>
    )
  }

}

export default UserContainer;