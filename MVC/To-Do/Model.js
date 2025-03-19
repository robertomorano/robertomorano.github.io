class TareasModel {
    constructor() {
        this.cont = 0;
        this.tareasArray = [];
    }
    
    id;
    descripcion;
    estado = "pendiente";
    fecha;
    
   
    añadirTarea(tarea) {
        let obj = {
            id: (this.cont++),
            descripcion : tarea[0],
            fecha : tarea[1],
            estado : "pendiente"
        }
        this.tareasArray.push(obj);
    }
    
    changeEstado(index){
        
        if(this.tareasArray[index].estado == "pendiente"){
            this.tareasArray[index].estado = "realizada";
        }else{
            this.tareasArray[index].estado = "pendiente";
        }
    }

    buscarPorID(id){
        this.tareasArray.forEach(e => {
            if(id == e.id){
                return e;
            }
        });
    }
    eliminarTarea(id){
        let e = this.buscarPorID(id);        
        this.tareasArray.splice(e, 1);
    } 

}