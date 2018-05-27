import React from 'react';

export default class UserData extends React.Component {

  handleClickItem() {
    this.props.updateState({
        activeUser: this.props.user
    });
  }

  render() {

    return(
      <tr onClick={this.handleClickItem.bind(this)}>
        <td>{this.props.user.avatar}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.phone}</td>
      </tr>
    );
  }
}
