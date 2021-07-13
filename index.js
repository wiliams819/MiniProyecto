//https://rickandmortyapi.com/api/character/
let contenedor = document.querySelector(".container_father");

let imagen = document.querySelector(".imagen");
let nombre = document.querySelector(".nombre");
let planeta = document.querySelector(".planeta");
let estatus = document.querySelector(".status");
let especie = document.querySelector(".especie");
let genero = document.querySelector(".genero");

const peticion = async ()=>{
    let resultado = await axios("https://rickandmortyapi.com/api/character/")
    console.log(resultado.data.results)
    
    for (let i = 0; i < 19; i++) {
        imagen = resultado.data.results[i].image;
        nombre = resultado.data.results[i].name;
        description= resultado.data.results[i].origin.name;
        estatus = resultado.data.results[i].status;
        especie = resultado.data.results[i].species;
        genero = resultado.data.results[i].gender;

        let inyeccion = `
        <article class="container card s-mb-2 m-mb-2 lg-mb-2 xl-mb-2 s-mr-3 m-mr-3 lg-mr-3 xl-mr-3">
            <div class="container-img">
                <img class="imagen" src="${imagen}" alt="">
            </div>
            <div>
                <h3 class="nombre"> Nombre: ${nombre}</h3>
                <p class="descripcion">Planeta: ${description}</p>
                <p class="estatus">Estatus: ${estatus}</p>
                <p class="especie">Especie: ${especie}</p>
                <p class="genero">Género: ${genero}</p>
            </div>
        </article>
        `
        contenedor.innerHTML += inyeccion;
    }


}

peticion()
