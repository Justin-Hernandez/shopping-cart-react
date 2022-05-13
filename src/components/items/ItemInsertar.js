import React from 'react'

function ItemInsertar(props) {
    return (
        
            <div className="card border-0" onClick={props.cambiarEstado}>

                <div className="card-header border-0 mt-1 mb-5">
                    {' '}
                </div>

                <img src={require('../../../src/img/add.png')} className="card-img-top mt-4 mb-5" alt="" />

                <div className="card-footer border-0 mt-5">
                    {' '}
                </div>
            </div>
    )
}

export default ItemInsertar