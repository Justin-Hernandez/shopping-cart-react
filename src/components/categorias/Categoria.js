import React, { Component } from 'react'

import Item from '../items/Item'
import CardNuevoItem from '../items/CardNuevoItem';

import '../../css/categoria.css'

export default class Categoria extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.visualizar = this.visualizar.bind(this)
    }

    visualizar() {
        if (this.state.visible === undefined) {
            this.setState({ visible: true })
        } else {
            this.setState({ visible: !this.state.visible })
        }
    }

    render() {

        //animaciones en categoria.css
        let visible = this.state.visible === undefined ? 'categoria-inicial' : this.state.visible ? 'categoria-visible' : 'categoria-escondida'
        let buttonVisible = this.state.visible ? 'btn-dark' : 'btn-outline-dark'

        return (
            <React.Fragment>

                <div className={"btn w-100 mb-1 border-0 " + buttonVisible} onClick={() => this.visualizar()}>
                    {this.props.categoria}
                </div>

                <div className={"rounded-2 div-categoria " + visible}>
                    <div className="row m-0 p-0">
                        {
                            this.props.items.map((item, index) => (
                                <div className="col-3 m-0 p-0 pt-0 pb-1 pe-1" key={index}>
                                    <Item 
                                        key={item.codigo}
                                        codigo={item.codigo}
                                        stock={item.stock}
                                        descripcion={item.descripcion}
                                        precio={item.precio}
                                        img={item.img} 
                                        columna={index+1}
                                        categoria={this.props.categoria}
                                        insertarNuevoItemCarrito={this.props.insertarNuevoItemCarrito}/>
                                </div>
                            ))
                        }
                        <CardNuevoItem 
                            categoria={this.props.categoria}
                            insertarNuevoItem={this.props.insertarNuevoItem}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
