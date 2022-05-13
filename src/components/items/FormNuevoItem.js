import React, { Component } from 'react'

export default class FormNuevoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFileChange(event) {
        this.setState({ [event.target.name]: URL.createObjectURL(event.target.files[0])})
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.insertarNuevoItem(this.props.categoria, {
            ...this.state
        })
        
        //cambiar el estado del padre para ocultar el form
        this.props.cambiarEstado()
    }

    render() {
        return (
            <div className="card border-0 p-0">

                <form onSubmit={this.handleSubmit}>
                    <div className="card-body p-2 pb-0">
                        <div className="col-12 form-floating pb-3">
                            <input required name="codigo" className="form-control input-sm border-0" type="text" maxLength="10" id="codigo" placeholder="XXXX" onChange={this.handleChange} />
                            <label htmlFor="codigo" className="text-break">Codigo</label>
                        </div>

                        <div className="col-12 form-floating pb-3">
                            <input required name="stock" className="form-control input-sm border-0" type="number" min="1" max="999" step="1" id="stock" placeholder="99" onChange={this.handleChange}/>
                            <label htmlFor="stock" className="text-break">Stock</label>
                        </div>

                        <div className="col-12 form-floating pb-3">
                            <input required name="precio" className="form-control input-sm border-0" type="number" min="0.1" max="9999.99" step="0.01" id="precio" placeholder="99.99" onChange={this.handleChange}/>
                            <label htmlFor="precio" className="text-break">Precio</label>
                        </div>

                        <div className="col-12 form-floating pb-3">
                            <textarea required name="descripcion" id="descripcion" className="form-control input-sm border-0" placeholder="Descripcion..." onChange={this.handleChange}></textarea>
                            <label htmlFor="descripcion" className="text-break">Descripcion</label>
                        </div>

                        <div className="col-12 pb-1">
                            <input required name="img" className="form-control" type="file" id="form-img" accept="image/*" onChange={this.handleFileChange}/>
                        </div>
                    </div>

                    <div className="card-footer border-0 p-2">
                        <button type="submit" className="btn btn-outline-dark w-100 border-0 mb-1">Crear</button>
                        <button type="button" className="btn btn-outline-danger w-100 border-0" onClick={this.props.cambiarEstado}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}
