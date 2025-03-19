class TareasView{
    cogerInput(){
            return [$("#tarea").val(), $("#fecha").val()];
    }
    limpiarInput(){
        $("#tarea").val("");
        $("#fecha").val("");
    }
    renderTareas(tareas){
        $("#tareas").empty();
        tareas.forEach((tarea, index) => {
            let tr = $("<tr></tr>");
            tr.append(`<td id=${index}>`+tarea.id+"</td>");
            tr.append("<td>"+tarea.descripcion+"</td>");
            let tdEstado = $("<td></td>");
            tdEstado.text(tarea.estado);
            tdEstado.click(() => {
                this.botonEstado(index);
            })
            tr.append(tdEstado);
            let tdElim = $("<td></td>");
            let button = $("<button>Eliminar</button>");
            button.click(() => {
                this.botonEliminar(tarea.id);
            });
            tdElim.append(button);
            tr.append(tdElim);
            $("#tareas").append(tr);
        });
    }
    botonAñadir(funcionAñadir){
        $("#añadir").on("click", funcionAñadir);
    }
   accionEliminar(funcionEliminar){
    this.botonEliminar = funcionEliminar;
   }
   accionEstado(funcionEstado){
       this.botonEstado = funcionEstado;
   }
   tareaHecha(index){
    $(`#${index}`).style.background = "red";
   }
} 
   