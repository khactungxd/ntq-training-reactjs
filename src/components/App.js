import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Profile from './Profile';
import ProfileInfo from './ProfileInfo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        name: 'TungLK',
        age: 29,
        company: 'ntq'
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeAge(event) {
    this.setState({age: event.target.value});
  }

  handleChangeCompany(event) {
    this.setState({company: event.target.value});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Profile handleChangeName={this.handleChangeName} handleChangeAge={this.handleChangeAge} handleChangeCompany={this.handleChangeCompany}/>
              <ProfileInfo name={this.state.name} age={this.state.age} company={this.state.company}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}