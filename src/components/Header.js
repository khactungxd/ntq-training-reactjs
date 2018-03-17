import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

class Header extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const { username, dispatch} = this.props
    const { time } = this.props
    return (
        <div>
            <h1> good {time}, {username} </h1>
            <button onClick={this._changeUsername(dispatch)}>Change Username</button>

            <h1>Header</h1>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
        </div>
    )
  }

  _changeUsername(dispatch) {
    return(event) => {
      //API.updateUsername().then(
      //  (res) => dispatch(changeUsername(res.username)),
      //  (err) => dispatch(changeUsernameError(error))
      //)
      dispatch({
        type: 'Change_Username',
        payload: 'Change from view'
      })
    }
  }
}

export default connect(state => ({
    username: state.username
})
)(Header)