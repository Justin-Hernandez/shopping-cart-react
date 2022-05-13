import React, { Component } from 'react'

import FormNuevoItem from './FormNuevoItem';
import ItemInsertar from './ItemInsertar';

export default class CardNuevoItem extends Component {

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
            <div className="col-3 m-0 p-0 pt-0 pb-1 pe-1">
                {
                    this.state.mostrarForm ? <FormNuevoItem cambiarEstado={this.alternarForm} categoria={this.props.categoria} insertarNuevoItem={this.props.insertarNuevoItem}/> : <ItemInsertar cambiarEstado={this.alternarForm} />
                }
            </div>
        )
    }
}
