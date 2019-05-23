import React from 'react';
import Instance from './Instance.js';

class Instances extends React.Component {
  render() {
    const instances = (
      this.props.instances.map(instance => (
        <Instance key={instance.id} instance={instance} />
    )));

    return (
      <div>
        { instances }
      </div>
    );
  }
}

export default Instances;
