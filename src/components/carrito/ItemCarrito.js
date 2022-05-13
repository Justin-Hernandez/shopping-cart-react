import React, { Component } from 'react'

export default class ItemCarrito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteVisible: false
        };

        this.visualizar = this.visualizarBoton.bind(this)
        this.esconderBoton = this.esconderBoton.bind(this)
        this.eliminarItemCarrito = this.eliminarItemCarrito.bind(this)
    }

    visualizarBoton(){
        this.setState({ deleteVisible: true })
    }

    esconderBoton(){
        this.setState({ deleteVisible: false })
    }

    eliminarItemCarrito() {
        this.props.eliminarItemCarrito(this.props.categoria, { ...this.props })
    }

    render() {

        let imgURL = this.props.img

        //si no es un archivo
        if (!imgURL.includes('blob')) {
            imgURL = require(`../../../src/img/${imgURL}`)
        }

        let buttonVisible = this.state.deleteVisible ? "" : "invisible"

        return (
            <div className="row item-carrito mx-1 my-1 rounded-2" onMouseOver={() => this.visualizarBoton()} onMouseLeave={() => this.esconderBoton()}>

                <div className="col-10 pt-1">
                    <h6>{this.props.codigo}</h6>
                </div>

                <div className="col-2 p-1">
                    <button type="button" className={"btn btn-danger w-100 p-0 " + buttonVisible} onClick={() => this.eliminarItemCarrito()}>X</button>
                </div>

                <div className="col-12 small text-muted text-break">
                    {this.props.descripcion}
                </div>

                <div className="col-6 p-0 ps-1 pb-1">
                    <img src={imgURL} className="img-fluid w-100" alt={this.props.codigo} />
                </div>

                <div className="col-1 p-0 text-center my-auto">
                    <h6>x</h6>
                    <h6>=</h6>
                </div>

                <div className="col-4 p-0 text-truncate my-auto">
                    <h6>{this.props.cantidad}</h6>
                    <h6>{(this.props.precio * this.props.cantidad).toFixed(2)}€</h6>
                </div>
            </div>
        )
    }
}
