class Orden{
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    /*
        Métodos
    */
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS ){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; --> Otro método para agregar
        } else {
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let elements of this._productos){
            totalVenta += elements.precio;
        }
    }
}