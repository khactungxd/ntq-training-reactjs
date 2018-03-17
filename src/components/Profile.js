import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Enter your infor:</h1>
        <form>
          <label>
            Name: <input type="text" onChange={this.props.handleChangeName}/>
          </label>
          <br/>
          <label>
            Age: <input type="text" onChange={this.props.handleChangeAge}/>
          </label>
          <br/>
          <label>
            Company: <input type="text" onChange={this.props.handleChangeCompany}/>
          </label>
        </form>
      </div> 
    )
  }
}