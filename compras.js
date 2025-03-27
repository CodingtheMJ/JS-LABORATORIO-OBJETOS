function listaCompras (){
    this.productos = [];
    this.agregar = function(producto){
        this.producto = producto
        this.productos.push(producto);
    }
    this.mostrar = function(){
        for(let i = 0; i < this.productos.length; i++){
            console.log(this.productos[i]);
        }
    }
}
let nuevaLista = new listaCompras();
nuevaLista.agregar("Manzana");
nuevaLista.agregar("Manzana");
nuevaLista.agregar("Manzana");
nuevaLista.mostrar();