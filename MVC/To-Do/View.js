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
        let cont = 1;
        tareas.forEach((tarea, index) => {
            if(tarea.getBorrar() === null){
                let tr = $("<tr></tr>");
                tr.append(`<td>`+cont+"</td>");
                //tr.append(`<td id=${index}>`+tarea.getId()+"</td>");
                tr.append("<td>"+tarea.getDescripcion()+"</td>");
                let tdEstado = $("<td></td>");
                tdEstado.text(tarea.getEstado());
                tdEstado.click(() => {
                    this.botonEstado(index);
                })
                tr.append(tdEstado);
                let tdElim = $("<td></td>");
                let button = $("<button>Eliminar</button>");
                button.click(() => {
                    this.botonEliminar(index);
                });
                tdElim.append(button);
                tr.append(tdElim);
                $("#tareas").append(tr);
                cont++;
            }
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
   