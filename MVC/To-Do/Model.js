class TareasModel {
    constructor() {
        this.TareasArray = [];
    }
    id;
    descripcion;
    estado = false;
    fecha;
    
    Tareas(id, estado, fecha) {
        this.id = id;
        this.estado = estado;
        this.fecha = fecha;
    }
    añadirTarea(tarea) {
        this.Tareas.push(tarea);
    }
    getDni(){
        return this.id;
    }
    getEstado(){
        return this.estado;
    }
    changeEstado(){
        if(this.estado == "pendiente"){
            this.estado = "realizada";
        }else{
            this.estado = "pendiente";
        }
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fecha){
        this.fecha = fecha;
    }
    buscarPorID(id){
        this.Tareas.forEach(e => {
            if(id == e.id){
                return e;
            }
        });
    }
    eliminarTarea(id){
        let e = this.buscarPorID(id);        
        this.Tareas.splice(e, 1);
    } 

}