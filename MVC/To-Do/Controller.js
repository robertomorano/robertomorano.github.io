class TareasController{
    constructor(){
        this.modelo = new TareasModel();
        this.vista = new TareasView();

        this.vista.botonAñadir(this.botonAñadirControl.bind(this));
        this.vista.accionEliminar(this.eliminarTareas.bind(this));
        this.vista.accionEstado(this.cambiarEstado.bind(this));
    }
    cambiarEstado(index){
        this.modelo.changeEstado(index);
        this.actualizarVista();
        this.vista.tareaHecha(index);
    }
    botonAñadirControl(){
        let tarea = this.vista.cogerInput();
        this.modelo.añadirTarea(tarea);
        this.vista.limpiarInput();
        this.vista.renderTareas(this.modelo.tareasArray);
    }

    eliminarTareas(index){
        this.modelo.eliminarTarea(index);
        this.actualizarVista();
    }
    actualizarVista(){
        this.vista.renderTareas(this.modelo.tareasArray);
    }
}