import React, { Component } from 'react'

export default class FormNuevaCategoria extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.insertarNuevaCategoria(this.state['categoria'])

        //cambiar el estado del padre para ocultar el form
        this.props.cambiarEstado()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="d-flex justify-content-center w-100">
                    <input required name="categoria" className="text-center input-sm border-0 w-75 rounded-2 me-1" type="text" maxLength="15" id="categoria" onChange={this.handleChange} />
                    <button type="submit" className="btn btn-outline-dark border-0 w-25 me-1">Crear</button>
                    <button type="button" className="btn btn-outline-danger btn-cancelar border-0 w-25" onClick={() => this.props.cambiarEstado()}>Cancelar</button>
                </div>
            </form>
        )
    }
}
