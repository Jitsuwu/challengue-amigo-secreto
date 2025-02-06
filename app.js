// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*

logica creada por Marco Estrada -Jisat

*/
<script>
    
    let names = [];

    function agregarAmigo(){

        input=document.getElementById("amigo");
    
        let name=input.value.trim();
        console.log(name);
        
        if (name!=""){
            names.push(name);
            input.value="";
            actualizarListaAmigos();
            }
        else 
            alert("Por favor, ingresa un nombre válido.");
    }

    function actualizarListaAmigos(){
        lista=document.getElementById("listaAmigos");
        lista.innerHTML = "";
        names.forEach((name, index) =>
        {
            li=document.createElement("li");
            li.textContent = name;
            lista.appendChild(li);
        });
    }

    function sortearAmigo(){

        if(names.length==0){
            alert("No hay nombres en la lista.");
        return;
        }

        else{
            randomIndex = Math.floor(Math.random() * names.length);
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = "<li>Amigo Secreto: " + names[randomIndex] + "</li>";
        }
    }

</script>
