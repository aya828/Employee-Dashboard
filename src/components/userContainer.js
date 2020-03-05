import React, { Component } from "react";
import API from "../utils/API";
import UserDetail from "./userDetail";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: ""
    }
  }

  componentDidMount(results) {
    this.displayUser(results);
    console.log(results)
  }

  displayUser = query => {
    API.search(query).then(res => {
      console.log(res.data.results)
      this.setState({
        results: res.data.results
      })
    }).catch(err => console.log(err));
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
      {this.state.results ? (
        this.state.results.map(user => {
          return(
            <UserDetail
              key={user.index}
              src={user.picture.thumbnail}
              name={`${user.name.first} ${user.name.last}`}
              phone={user.phone}
              email={user.email}
              DOB={user.dob}
            />
          )
        })
        
      ) : (
        <h3>No Results to Display</h3>
      )}
        </div> 
      </div>
      </div>
    )
  }

}

export default UserContainer;
