class TareasModel {
    constructor() {
        this.cont = 0;
        this.tareasArray = [];
    }

   
    añadirTarea(tarea) {
        let obj = new Tarea(this.cont++, tarea[0],tarea[1])
        console.log(obj);
        this.tareasArray.push(obj);
    }
    
    changeEstado(index){
        this.tareasArray[index].changeEstado();
    }

    buscarPorID(id){
        this.tareasArray.forEach(e => {
            console.log(e);
            if(id == e.getId()){
                return e;
            }
        });
    }
    eliminarTarea(index){
       this.tareasArray[index].borrarTarea();
        
    } 

}