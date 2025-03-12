class MegaView{
    constructor(){
        let input = { 
            nombre: $("#nombre"),     	
            apellidos: $("#apellidos"),
            edad: $("#edad"),     	
            ciudad: $("#ciudad")
        };

        const enviar= document.querySelector("#enviar");
        const table = document.querySelector("#objeto"); 
    }
        mostrarPersonas(lista){
            this.table.empty();
            

            array.forEach(function crear(element, index){
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerText=index+1;
                tr.appendChild(td);
                table.appendChild(tr);	
                let claves = Object.keys(element) //[nombre , apellido...]
                for(let i=0; i< claves.length; i++){
                    if(element[claves[i]]==""){
                        alert(claves[i]+ " Falta");
                        return;
                    }
                    const td = document.createElement("td");
                    td.innerText = element[claves[i]];
                    tr.appendChild(td);
                    tr.classList.add("fila");
                    tr.id = index;
                }
                $(".fila").on("click", eliminar)
                table.appendChild(tr);
            })
        }
    getInput(){
        return [input.nombre.val(), input.apellidos.val(), input.edad.val(), input.ciudad.val()]
    }
    botonEnviar(){
        this.enviar.addEventListener("click", );
    }

}
