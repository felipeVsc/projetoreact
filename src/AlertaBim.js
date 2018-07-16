import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertaBim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
        Fim do bimestre chegando! Coloquem as notas!
      </Alert>
    );
  }
}

export default AlertaBim;