import React from "react";

class Carita extends React.Component {
  constructor(props) {
    super(props);

    this.entristecedor = this.entristecedor.bind(this);

    this.caritaActual = ':-|';
    this.caritaSonriente = ':)';
    this.caritaTriste = ':(';

  }

  entristecedor() {
    if (this.caritaActual === this.caritaTriste) {
      this.caritaActual = this.caritaSonriente;
    } else {
      this.caritaActual = this.caritaTriste;
    }
    console.log(this.caritaActual);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="face" onClick={this.entristecedor}>{this.caritaActual}</div>
    );
  }
}

export default Carita;