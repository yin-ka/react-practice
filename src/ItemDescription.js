import React, { Component } from 'react'

export default class ItemDescription extends Component {
  render() {
    const {name, description} = this.props;
    return (
      <div>
        <div>
        <p>{name}</p>
        <p>{description}</p>
    </div>
      </div>
    )
  }
}
