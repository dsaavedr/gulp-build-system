import React from 'react';

export default class Test extends React.Component {
  render() {

    return (
      <div>
        <h1 className="text-center"> {this.props.msg} </h1>
      </div>
    );
  };
}
