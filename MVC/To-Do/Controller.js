class TareasController{
    constructor(){
        this.tareas = new TareasModel();
        this.vista = new TareasView();

        this.vista.botonAñadir(this.botonAñadirControl.bind(this));
    }
    botonAñadirControl(){
       let tarea = this.vista.cogerInput();
       this.tareas.añadirTarea(tarea);
       this.vista.limpiarInput();
       this.vista.renderTareas(this.tareas.Tareas);
    }
}