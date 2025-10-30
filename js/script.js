import peliculas from './peliculas.js'

const divAccion=document.getElementById('genero-28')
const divThriller=document.getElementById('genero-53')
const divAventura=document.getElementById('genero-12')

function verPeliculas(peliculas){
    const pelisAccion= peliculas.filter(x=>x.genre_ids.includes(28))
    const pelisThriller= peliculas.filter(x=>x.genre_ids.includes(53))
    const pelisAventura= peliculas.filter(x=>x.genre_ids.includes(12))

    mostrarPeliculas(pelisAccion,divAccion);
    mostrarPeliculas(pelisThriller,divThriller)
    mostrarPeliculas(pelisAventura,divAventura)

}
verPeliculas(peliculas);




function mostrarPeliculas(peliculas,genero){
for(let i=0;i<peliculas.length;i++){
        let peli=document.createElement('section')
        let nombrePeli = document.createElement('p');
        nombrePeli.textContent = peliculas[i].original_title;
        let fotoPeli = document.createElement("img");
        fotoPeli.src = "https://image.tmdb.org/t/p/w500" + peliculas[i].poster_path;
        fotoPeli.alt = peliculas[i].original_title;

        peli.appendChild(fotoPeli)
        peli.appendChild(nombrePeli)

        genero.appendChild(peli)

    }
}


    