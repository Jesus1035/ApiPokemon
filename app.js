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
