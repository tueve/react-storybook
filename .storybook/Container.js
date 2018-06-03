import React, { Component } from 'react';
import './polyfills';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div
        role="main"
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {story()}
      </div>
    );
  }
}
