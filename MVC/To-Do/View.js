class TareaView{
    cogerInput(){
            return [$("#tarea").val(), $("#fecha").val()];
    }
    limpiarInput(){
        $("#tarea").val("");
        $("#fecha").val("");
    }
    renderTareas(tareas){
        $("#tareas").html("");
        tareas.forEach((tarea, index) => {
            let tr = $("<tr></tr>");
            tr.append("<td>"+tarea[0]+"</td>");
            tr.append("<td>"+tarea[1]+"</td>");
            let td = $("<td></td>");
            let button = $("<button>Eliminar</button>");
            button.click(() => {
                this.botonEliminar(index);
            });
        });
    }
    botonAñadir(funcionAñadir){
        $("#añadir").on("click", funcionAñadir);
    }
   accionEliminar(funcionEliminar){
    this.botonEliminar = funcionEliminar;
   }
} 
   