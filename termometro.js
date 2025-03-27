function termometro (){
    this.actualizar = function(grados)
    
    {this.grados = grados
        if (grados < 10){
            console.log ("Hace frío!");
        }
        else if (grados > 30){
            console.log ("Hace calor!");}
         else{console.log ("Temperatura Agradable")} 
            
        
        
    
}}
let termometro1 = new termometro ();
termometro1.actualizar (5)
termometro1.actualizar (20)
termometro1.actualizar (35)
