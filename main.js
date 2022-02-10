//Cargar Tipos//
var typesPoke = document.querySelectorAll(".typeButton");
//Funcion para llamar a un pokemon//
var fetchPokemon = (id =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        let poke = document.createElement("div");
        poke.className = "pokemon";
        poke.innerHTML = `
        <p>${data.name}</p>
        <p>${data.types[0].type.name}</p>
        <img src="${data.sprites.front_default}"></img>
        `
        if(document.getElementById("textFilter").value == ""){
            typesPoke.forEach(tipo=>{
                if((tipo.checked == true && tipo.id.toLowerCase() == ("type" + data.types[0].type.name)) || typesPoke[0].checked == true){
                    document.getElementById("principal").appendChild(poke);
                }
                if(tipo.id.toLowerCase() == ("type" + data.types[0].type.name)){
                    poke.className = (tipo.id + " pokemon");
                }
            })
        }
        else{
            typesPoke.forEach(tipo=>{
                if((tipo.checked == true && tipo.id.toLowerCase() == ("type" + data.types[0].type.name)&& document.getElementById("textFilter").valuetoLowerCase() == data.name) || 
                (typesPoke[0].checked == true && document.getElementById("textFilter").value.toLowerCase() == data.name)){
                    document.getElementById("principal").appendChild(poke);
                }
                if(tipo.id.toLowerCase() == ("type" + data.types[0].type.name)){
                    poke.className = (tipo.id + " pokemon");
                }
            })
        }

    })
})
//Funcion para llamar a todos los pokemones(primera generacion)//
var cargarPokemones = (()=>{
    document.getElementById("principal").innerHTML = "";
    for(let i = 1; i<=151 ; i++){
        fetchPokemon(i);
    }
})
cargarPokemones();

