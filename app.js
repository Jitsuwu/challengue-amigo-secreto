// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*

logica creada por Marco Estrada -Jisat

*/
<script>
    
    let amigos = [];

    function agregarAmigo()
    {
        input=document.getElementById("amigo");
        let nombre=input.value.trim();
        console.log(nombre);
        
        if(nombre!="")
        {
            nombre.push(amigos);
            input.value="";
            actualizarListaAmigos();
        }
        else
        {
            alert("Por favor, ingresa un nombre valido");
        }
    }

    function actualizarListaAmigos()
    {
        lista=document.getElementById("ListaAmigos");
        lista.innerHTML="";
        nombre.forEach((nombre, index)=>
        {
            li=document.createElement("li");
            li.textContent=nombre;
            lista.appendChild(li);
        })
    }

    function sortearAmigo()
    {
        if(amigos.length==0)
        {
            alert("No hay nombres en la lista de amigos");
            return;
        }
        else
        {
            randomIndex=Math.floor(Math.random()*nombre.length);
            let resultado=document.getElementById("resultado");
            resultado.innerHTML="<li>Tu Amigo Secreto es:"+nombre[randomIndex]+"</li>"
        }
    }
</script>
