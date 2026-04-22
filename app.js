const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_EQUIPO = 6;

let pokemonActual = null;
let equipo = [];


const inputNombre = document.getElementById('inputNombre');
const idBuscarNombre = document.getElementById('idBuscarNombre');
const btn_aleatorio = document.getElementById('btn_aleatorio');
const ContenedorFicha = document.getElementById('ContenedorFicha');
const btnAgregar = document.getElementById('btnAgregar');
const tablaEquipo = document.getElementById('tablaEquipo');
const alerta = document.getElementById('alerta');
const contadorEquipo = document.getElementById('contadorEquipo');


idBuscarNombre.addEventListener('click', () => {
    const nombre = inputNombre.value.trim().toLowerCase();
    if (nombre) buscarPokemon(nombre);
});

btn_aleatorio.addEventListener('click', () => {
    const idRandom = Math.floor(Math.random() * 150) + 1;
    buscarPokemon(idRandom);
});

btnAgregar.addEventListener('click', agregarAlEquipo);

inputNombre.addEventListener('keypress', e => {
    if (e.key === 'Enter') idBuscarNombre.click();
});

async function buscarPokemon(param) {
    try {
        const response = await fetch(API_URL + param);

        if (!response.ok) throw new Error("Pokemon no encontrado");

        const data = await response.json();

        pokemonActual = data;

        mostrarPokemon(data);

    } catch (error) {
        alerta.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
}

function mostrarPokemon(pokemon) {
    ContenedorFicha.classList.remove('d-none');

    document.getElementById('Nombrepokemon').textContent = pokemon.name;
    document.getElementById('idpoke').textContent = pokemon.id;
    document.getElementById('pokeAltura').textContent = pokemon.height / 10;
    document.getElementById('pokePeso').textContent = pokemon.weight / 10;
    document.getElementById('pokeHabilidad').textContent = pokemon.abilities[0].ability.name;

    document.getElementById('imagenpokemon').src = pokemon.sprites.front_default;

    alerta.innerHTML = "";
}

