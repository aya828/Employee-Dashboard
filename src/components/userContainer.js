import React, { Component } from "react";
import API from "../utils/API";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: ""
    }
  }

  componentDidMount() {
    this.searchUser();
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
      </div>
    )
  }

}

export default UserContainer;