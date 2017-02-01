import React, { Component } from 'react';

export default class Sample extends Component {
  renderList () {
    return this.props.samples.map((sample)) => {
      return (
        <li key={sample.title} className="list-group-item">{sample.title}</li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
