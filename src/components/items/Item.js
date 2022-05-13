import React from 'react'

import '../../css/item.css'

function Item(props) {

    let imgURL = props.img

    let opacity = props.stock <= 0 ? 'opacity-50' : 'opacity-100'
    let disabled = props.stock <= 0

    //si no es un archivo
    if(!imgURL.includes('blob'))
    {
        imgURL = require(`../../../src/img/${imgURL}`)
    }

    function ampliar(event)
    {
        event.target.style["z-index"] = "99"
        event.target.style["transition"] = ".2s"
        event.target.style["transform"] = "scale(1.35)"
        event.target.style["box-shadow"] = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"

        //si es el ultimo item de la columna, amplia de derecha a izquierda
        //si es el primer item de la columna, amplia de iquierda a derecha
        //si es un item del centro amplia en el centro
        if(props.columna % 4 === 0)
        {
            event.target.style["transform-origin"] = "100% 0%"
        }else if(props.columna % 4 === 1 )
        {
            event.target.style["transform-origin"] = "0% 0%"
        }else
        {
            event.target.style["transform-origin"] = "50% 0%"
        }
    }

    function normal(event)
    {
        event.target.style["z-index"] = "1"
        event.target.style["transition"] = ".2s"
        event.target.style["transform"] = "scale(1)"
        event.target.style["box-shadow"] = ""
    }

    function insertarNuevoItemCarrito()
    {
        props.insertarNuevoItemCarrito(props.categoria, {...props})
    }

    return (
        <div className="card border-0">

            <div className="card-header py-0 border-0 fs-6">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-9 p-0 px-2 text-truncate h6">
                        {props.codigo}
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 stock text-center text-truncate h6">
                        {props.stock}
                    </div>
                </div>
            </div>

            <img src={imgURL} className={"card-img-top rounded-2 " + opacity} alt={props.codigo} onMouseEnter={ampliar} onMouseLeave={normal}/>

            <div className="card-body text-center">
                <h5 className="card-title text-truncate">{props.precio}€</h5>
                <p className="card-text">{props.descripcion}</p>
            </div>

            <div className="card-footer border-0 p-2">
                <button type="button" className="btn btn-outline-dark btn-add w-100 border-0" disabled={disabled} onClick={insertarNuevoItemCarrito}>Añadir</button>
            </div>
        </div>
    )
}

export default Item
