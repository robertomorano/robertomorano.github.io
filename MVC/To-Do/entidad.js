class Tarea {
    constructor(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = "pendiente";
        this.fecha = fecha;
        this.borrar = null;
    }
    getId() {
        return this.id;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getEstado() {
        return this.estado;
    }
    getFecha() {
        return this.fecha;
    }
    getBorrar() {
        return this.borrar;
    }   
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    changeEstado() {
        if (this.estado == "pendiente") {
            this.estado = "realizada";
        } else {
            this.estado = "pendiente";
        }
    }
    borrarTarea() {
        this.borrar = new Date();
    }
}