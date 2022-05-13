import React from 'react'

import Categoria from './Categoria'
import ButtonNuevaCategoria from './ButtonNuevaCategoria'

function Categorias(props) {

    return (
        <div className="row">
            {
                Object.keys(props.items).map((key, index) => (
                    <div className="col-12" key={key}>
                        <Categoria 
                            key={key} 
                            categoria={key} 
                            items={props.items[key]} 
                            insertarNuevoItem={props.insertarNuevoItem}
                            insertarNuevoItemCarrito={props.insertarNuevoItemCarrito}/>
                    </div>
                ))
            }
            <div className="col-12">
                <ButtonNuevaCategoria insertarNuevaCategoria={props.insertarNuevaCategoria}/>
            </div>
        </div>
    )
}

export default Categorias