import React from 'react';

export default class ProfileInfo extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>Your info: </h1>
        <h2> Your name is: {this.props.name} </h2>
        <h2> Your age is: {this.props.age} </h2>
        <h2> Your company is: {this.props.company} </h2>
      </div>
    )
  }
}