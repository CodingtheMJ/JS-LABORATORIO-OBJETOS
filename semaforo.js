function semaforo(){
    this.estado = "rojo"
this.cambiar = function(){
    if (this.estado === "rojo"){
        this.estado = "verde"
        return this.estado}
        else if (this.estado === "verde"){
        this.estado = "amarillo"
        return this.estado}
        
        else if (this.estado === "amarillo"){
            this.estado = "rojo"
            return this.estado}
       } 
}
let semaforo1 = new semaforo()
console.log(semaforo1.estado)

semaforo1.cambiar();
console.log(semaforo1.estado)
semaforo1.cambiar();
console.log(semaforo1.estado)
semaforo1.cambiar();
console.log(semaforo1.estado)
