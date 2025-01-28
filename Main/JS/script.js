const imagenes = [
   "../../IMG/Codes.png",
   "../../IMG/Codes2.png",
   "../../IMG/Codes3.png",
   "../../IMG/Codes4.png",
   "../../IMG/Codes5.png"
];
let indice = 0;

function cambiarFondo() {
    document.body.style.backgroundImage = `url('${imagenes[indice]}')`;
    indice = (indice + 1) % imagenes.length; // Cambia al siguiente índice
}
// Cambia el fondo cada 5 segundos (5000 milisegundos)
cambiarFondo(); // Cambia el fondo inmediatamente al cargar la página
setInterval(cambiarFondo, 5000);