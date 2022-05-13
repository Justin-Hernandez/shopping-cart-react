import React, { Component } from 'react'
import FormNuevaCategoria from './FormNuevaCategoria';

export default class ButtonNuevaCategoria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mostrarForm: false
    };

    this.alternarForm = this.alternarForm.bind(this)
  }

  alternarForm() {
    this.setState({ mostrarForm: !this.state.mostrarForm })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.mostrarForm ? <FormNuevaCategoria cambiarEstado={this.alternarForm} insertarNuevaCategoria={this.props.insertarNuevaCategoria} /> : <div className={"btn w-100 mb-1 border-0 btn-outline-dark"} onClick={() => this.alternarForm()}>+ Nueva Categoria +</div>
        }
      </React.Fragment>
    )
  }
}
