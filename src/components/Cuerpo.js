import React, { Component } from 'react'

import Categorias from './categorias/Categorias';
import Carrito from './carrito/Carrito';

export default class Cuerpo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {
                "Portatiles": [
                    {
                        "codigo": "14ITL05",
                        "stock": 27,
                        "descripcion": "Lenovo IdeaPad 5 Lite 14ITL05 Intel Core i5-1135G7/8GB/512GB SSD/14.1",
                        "precio": 639.99,
                        "img": "p1.webp"
                    },
                    {
                        "codigo": "SGBOOK2",
                        "stock": 10,
                        "descripcion": "Samsung Galaxy Book2 Pro Intel Core i5-1240P/16GB/512GB SSD/13.3",
                        "precio": 1349.57,
                        "img": "p2.webp"
                    },
                    {
                        "codigo": "G513IC",
                        "stock": 47,
                        "descripcion": "Asus ROG Strix G15 G513IC-HN004 AMD Ryzen 7 4800H/16GB/512GB SSD/RTX 3050/15.6",
                        "precio": 949.23,
                        "img": "p3.webp"
                    },
                    {
                        "codigo": "16-d0057",
                        "stock": 10,
                        "descripcion": "HP Victus 16-d0057ns Intel Core i7-11800H/16GB/512GB SSD/RTX 3060/16.1",
                        "precio": 1149,
                        "img": "p4.webp"
                    },
                    {
                        "codigo": "G513QM",
                        "stock": 29,
                        "descripcion": "Asus ROG G513QM-HF070 AMD Ryzen 9 5900HX/16GB/1TB SSD/RTX3060/15.6",
                        "precio": 1399,
                        "img": "p5.webp"
                    },
                    {
                        "codigo": "RZBL15",
                        "stock": 5,
                        "descripcion": "Razer Blade 15 Advanced Model 4K 144Hz Intel Core i9-12900H/32GB/1TB SSD/RTX 3080Ti/15.6",
                        "precio": 4806.84,
                        "img": "p6.webp"
                    },
                    {
                        "codigo": "A10SE",
                        "stock": 12,
                        "descripcion": "MSI Creator 17 A10SE-627ES Intel Core i7-10875H/32GB/1TB SSD/RTX 2060/17.3",
                        "precio": 1828.74,
                        "img": "p7.webp"
                    },
                    {
                        "codigo": "V14 G2",
                        "stock": 45,
                        "descripcion": "Lenovo V14 G2 ITL Intel Core i5-1135G7/8GB/256GB SSD/14",
                        "precio": 549.99,
                        "img": "p8.webp"
                    }
                ],
                "Televisores": [
                    {
                        "codigo": "XR50X90",
                        "stock": 6,
                        "descripcion": "Sony Bravia XR50X90JAEP 50' UltraHD 4K HDR10",
                        "precio": 799.99,
                        "img": "t1.webp"
                    },
                    {
                        "codigo": "XR55A80",
                        "stock": 11,
                        "descripcion": "Sony Bravia XR55A80JAEP 55' OLED UltraHD 4K HDR",
                        "precio": 1874.07,
                        "img": "t2.webp"
                    },
                    {
                        "codigo": "QE65Q95",
                        "stock": 1,
                        "descripcion": "Samsung QE65Q950TS 65' QLED UltraHD 8K HDR10+",
                        "precio": 5073.99,
                        "img": "t3.webp"
                    },
                    {
                        "codigo": "QE85QN85",
                        "stock": 12,
                        "descripcion": "Sasmung QE85QN85AAT 85' Neo QLED UltraHD 4K",
                        "precio": 639.99,
                        "img": "t4.webp"
                    }
                ],
                "Perifericos": [
                    {
                        "codigo": "Apple Airpods G",
                        "stock": 12,
                        "descripcion": "Apple Airpods Max Auriculares Bluetooth Grises",
                        "precio": 588.75,
                        "img": "pf1.webp"
                    },
                    {
                        "codigo": "Apple Airpods P",
                        "stock": 16,
                        "descripcion": "Apple AirPods Max Plata",
                        "precio": 572.33,
                        "img": "pf2.webp"
                    },
                    {
                        "codigo": "Shure Aonic 4",
                        "stock": 9,
                        "descripcion": "Shure Aonic 4 Auriculares con Micrófono Blancos",
                        "precio": 420.99,
                        "img": "pf3.webp"
                    },
                    {
                        "codigo": "Logitech G Pro X",
                        "stock": 34,
                        "descripcion": "Logitech G Pro X Auriculares Gaming Inalámbricos con Lightspeed Negros",
                        "precio": 234.04,
                        "img": "pf4.webp"
                    },
                    {
                        "codigo": "Logitech G733",
                        "stock": 56,
                        "descripcion": "Logitech G733 Auriculares Gaming Inalámbricos Negros",
                        "precio": 136.78,
                        "img": "pf5.webp"
                    },
                    {
                        "codigo": "Logitech G305",
                        "stock": 163,
                        "descripcion": "Logitech G305 LightSpeed Ratón Inalámbrico Gaming 12000DPI Negro",
                        "precio": 29.99,
                        "img": "pf6.webp"
                    },
                    {
                        "codigo": "Logitech MX Master",
                        "stock": 234,
                        "descripcion": "Logitech MX Master 3 Ratón Inalámbrico Avanzado 4000DPI Gris",
                        "precio": 101.81,
                        "img": "pf7.webp"
                    }
                ]
            },
            itemsCarrito: [],
            notificacionPedido: false
        };

        this.insertarNuevoItem = this.insertarNuevoItem.bind(this)
        this.insertarNuevaCategoria = this.insertarNuevaCategoria.bind(this)
        this.insertarNuevoItemCarrito = this.insertarNuevoItemCarrito.bind(this)
        this.eliminarItemCarrito = this.eliminarItemCarrito.bind(this)
        this.realizarPedido = this.realizarPedido.bind(this)
        this.notificacion = this.notificacion.bind(this)
    }

    insertarNuevoItem(categoria, nuevoItem) {

        let itemEncontrado

        //busca por categoria un item con el mismo codigo, para en cuanto lo encuentra
        Object.keys(this.state.items).find((key) => {

            itemEncontrado = this.state.items[key].find((item) => {
                return item.codigo === nuevoItem.codigo
            })

            return itemEncontrado !== undefined
        })

        //si existe, mensaje de alerta y no se inserta
        if (itemEncontrado !== undefined) {
            alert(`Un item con codigo ${nuevoItem.codigo} ya existe`)
        } else {

            //concatena en la categoria que corresponda
            this.setState({
                items: {
                    ...this.state.items,
                    [categoria]: this.state.items[categoria].concat(nuevoItem)
                }
            })
        }
    }

    insertarNuevaCategoria(nombre) {

        //encuentra si ya existe una categoria con ese nombre
        let equals = Object.keys(this.state.items).find(function (nombreCategoria) {
            return nombreCategoria === nombre
        })

        //alert si ya existe, si no insertala
        if (equals !== undefined) {
            alert(`La categoria ${nombre} ya existe`)
        } else {
            this.setState({
                items: {
                    ...this.state.items,
                    [nombre]: []
                }
            })
        }
    }

    insertarNuevoItemCarrito(categoria, nuevoItem) {

        //busca en el carrito un item con el mismo codigo
        let itemCarrito = this.state.itemsCarrito.find(function (item) {
            return item.codigo === nuevoItem.codigo
        })

        if (itemCarrito === undefined) {
            //nueva propiedad 'cantidad'
            nuevoItem.cantidad = 1
            nuevoItem.categoria = categoria

            //reduce el stock del item correspondiente con map()
            //inserta un nuevo item en el carrito
            this.setState({
                items: {
                    ...this.state.items,
                    [categoria]: this.state.items[categoria].map((item) => {

                        if (item.codigo === nuevoItem.codigo) { item.stock -= 1 }
                        return { ...item }
                    })
                },
                itemsCarrito: this.state.itemsCarrito.concat(nuevoItem)
            })
        } else {

            //disminuye el stock del item en 1
            //aumenta la cantidad del item en el carrito en 1
            this.setState({
                items: {
                    ...this.state.items,
                    [categoria]: this.state.items[categoria].map((item) => {

                        if (item.codigo === nuevoItem.codigo) { item.stock -= 1 }
                        return { ...item }
                    })
                },
                itemsCarrito: this.state.itemsCarrito.map((item) => {

                    if (item.codigo === nuevoItem.codigo) { item.cantidad += 1 }
                    return { ...item }
                })
            })
        }
    }

    eliminarItemCarrito(categoria, itemBorrar) {
        //busca en el carrito un item con el mismo codigo
        let itemCarrito = this.state.itemsCarrito.find(function (item) {
            return item.codigo === itemBorrar.codigo
        })

        //si la cantidad cae a 0
        if (itemCarrito.cantidad - 1 <= 0) {
            //aumenta el stock del item correspondiente en 1
            //elimina el item del carrito
            this.setState({
                items: {
                    ...this.state.items,
                    [categoria]: this.state.items[categoria].map((item) => {

                        if (item.codigo === itemBorrar.codigo) { item.stock += 1 }
                        return { ...item }
                    })
                },
                itemsCarrito: this.state.itemsCarrito.filter((itemCarrito) => { return itemCarrito.codigo !== itemBorrar.codigo })
            })
        } else {
            //aumenta el stock del item correspondiente en 1
            //disminuye en 1 la cantidad del item en el carrito
            this.setState({
                items: {
                    ...this.state.items,
                    [categoria]: this.state.items[categoria].map((item) => {

                        if (item.codigo === itemBorrar.codigo) { item.stock += 1 }
                        return { ...item }
                    })
                },
                itemsCarrito: this.state.itemsCarrito.map((item) => {

                    if (item.codigo === itemBorrar.codigo) { item.cantidad -= 1 }
                    return { ...item }
                })
            })
        }
    }

    realizarPedido() {
        if (this.state.notificacionPedido) {
            this.setState({
                notificacionPedido: false
            })
        } else {
            if (this.state.itemsCarrito.length === 0) {
                alert('Su carrito esta vacio!')
            } else {
                this.setState({
                    notificacionPedido: true,
                    itemsCarrito: []
                })
            }
        }
    }

    notificacion() {
        if (this.state.notificacionPedido) {
            return <div className="alert alert-info text-center" role="alert">
                Pedido realizado con exito!
            </div>;
        }
        return null;
    }

    render() {

        return (
            <div className="container-lg align-items-center">
                <div className="row g-2 vh-100">

                    <div className="col-8 col-md-9">
                        <div className="d-flex justify-content-center">
                            <h1></h1>
                        </div>

                        {this.notificacion()}

                        <Categorias
                            items={this.state.items}
                            insertarNuevaCategoria={this.insertarNuevaCategoria}
                            insertarNuevoItem={this.insertarNuevoItem}
                            insertarNuevoItemCarrito={this.insertarNuevoItemCarrito} />

                    </div>

                    <div className="col-4 col-md-3">
                        <div className="d-flex justify-content-center">
                            <h1></h1>
                        </div>

                        <Carrito
                            items={this.state.itemsCarrito}
                            eliminarItemCarrito={this.eliminarItemCarrito}
                            realizarPedido={this.realizarPedido} />

                    </div>
                </div>
            </div>
        );
    }
}
