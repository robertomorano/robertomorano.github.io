class TareasController{
    constructor(){
        this.modelo = new TareasModel();
        this.vista = new TareasView();

        this.vista.botonAñadir(this.botonAñadirControl.bind(this));
        this.view.accionEliminar(this.eliminarTareas,bind(this))
    }
    botonAñadirControl(){
       let tarea = this.vista.cogerInput();
       this.modelo.añadirTarea(tarea);
       this.vista.limpiarInput();
       this.vista.renderTareas(this.modelo.Tareas);
    }

    eliminarTareas(index){
        this.modelo.eliminar(index);
        this.actualizarVista();
    }
}