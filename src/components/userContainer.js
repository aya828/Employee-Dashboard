import React, { Component } from "react";
import API from "../utils/API";
import UserDetail from "./userDetail";
import Moment from 'react-moment';

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      filtered: [],
    }
  }

  componentDidMount(results) {
    this.displayUser(results);
    this.setState({filtered: this.props.items})
    console.log(results)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    this.handleChange = this.handleChange.bind(this);
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.items;
    }
    this.setState({
      filtered: newList
    });
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
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Search a user" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col-2" style={{ textAlign: "center" }}>
            <h5>Image</h5>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <h5>Name</h5>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <h5>Phone</h5>
          </div>
          <div className="col-4" style={{ textAlign: "center" }}>
            <h5>Email</h5>
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <h5>DOB</h5>
          </div>
        </div>
      
      <div className="container">
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            {this.state.results ? (
              this.state.results.map(user => {
                return(
                  <UserDetail
                    key={user.index}
                    src={user.picture.thumbnail}
                    name={`${user.name.first} ${user.name.last}`}
                    phone={user.phone}
                    email={user.email}
                    DOB={<Moment format="MM/DD/YYYY">
                      {user.dob.date}
                    </Moment>}
                  />
                )
              })
              
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
          </div> 
        </div>
      </div>
    )
  }

}

export default UserContainer;
