import React from 'react'

import ItemCarrito from './ItemCarrito';

import '../../css/carrito.css'

function Carrito(props) {

    function calcularTotalCarrito() {

        let total = 0

        props.items.forEach((item) => {

            total += item.cantidad * item.precio
        })

        return total.toFixed(2)
    }

    return (
        <React.Fragment>
            <div className="carrito position-fixed">

                <div className="items-carrito rounded-2">

                    {
                        props.items.map((item) => (
                            <ItemCarrito
                                key={item.codigo}
                                codigo={item.codigo}
                                stock={item.stock}
                                descripcion={item.descripcion}
                                precio={item.precio}
                                cantidad={item.cantidad}
                                img={item.img}
                                categoria={item.categoria}
                                eliminarItemCarrito={props.eliminarItemCarrito} />
                        ))
                    }

                </div>

                <div className="total-carrito rounded-2 mt-1 p-0 m-0">
                    <div className="row align-items-center h-100 p-0 m-0 pb-1 pt-1 pe-1">
                        <div className="col-7 h-100 d-flex align-items-center pt-2">
                            <div className="w-100 h4 text-center">
                                {calcularTotalCarrito()}€
                            </div>
                        </div>
                        <div className="col-5 p-0 h-100">
                            <button type="button" className="btn btn-outline-dark border-0 w-100 h-100" onClick={props.realizarPedido}>Realizar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Carrito
