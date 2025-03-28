function libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function(){
        if(this.prestado == false){
            this.prestado = true
            console.log("Libro disponible, se lo presto");
        }else{
            console.log("*ERROR*, Este libro ya esta prestado");
        }
    }
}

let libro1 = new libro("Mil estrellas", "Juan");

libro1.prestar()
libro1.prestar()