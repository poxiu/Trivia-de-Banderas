// let banderas = ["bolivia, "peru", "albania",
// "grecia", "india", "south-korea", "ghana",
// "uganda", "australia", "islas-cook"];

let banderas = ["https://i.ibb.co/ZY6fbcw/flag-bolivia-1f1e7-1f1f4.png", "https://i.ibb.co/0JgLV9P/flag-peru-1f1f5-1f1ea.png", "https://i.ibb.co/Px906g7/flag-albania-1f1e6-1f1f1.png",
  "https://i.ibb.co/4Y0rqzr/flag-greece-1f1ec-1f1f7.png", "https://i.ibb.co/rFXV5TT/flag-india-1f1ee-1f1f3.png", "https://i.ibb.co/BN2kbKn/flag-south-korea-1f1f0-1f1f7.png", "https://i.ibb.co/4RRFdtg/flag-ghana-1f1ec-1f1ed.png",
  "https://i.ibb.co/YdHBYPN/flag-uganda-1f1fa-1f1ec.png", "https://i.ibb.co/JdVx8sB/flag-australia-1f1e6-1f1fa.png", "https://i.ibb.co/3rBhdQ7/flag-cook-islands-1f1e8-1f1f0.png"];

let correcta = [0, 1, 2, 1, 0, 1, 0, 1, 1, 2];

let opciones = [
  ["Bolivia", "Ghana", "Malí"],
  ["Polonia", "Perú", "Indonesia"],
  ["Montenegro", "Austria", "Albania"],
  ["Finlandia", "Grecia", "Islandia"],
  ["India", "Irán", "Irak"],
  ["Corea del Norte", "Corea del Sur", "Taiwán"],
  ["Ghana", "Senegal", "Guinea"],
  ["Mozambique", "Uganda", "Zimbabwe"],
  ["Nueva Zelanda", "Australia", "Fiji"],
  ["Tuvalu", "Islas Marianas", "Islas Cook"],
];

let puntajePorOpcion = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let posActual = 0;
let cantadidAcertada = 0;
let posInciso;
function comenzarJuego() {
  posActual = 0;
  cantadidAcertada = 0;
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  siguienteBandera();
}

function siguienteBandera() { //controlamos
  if (banderas.length <= posActual) {
    terminarJuego();
  }
  else {
    document.getElementById("imgBandera").src = banderas[posActual];
    document.getElementById("op0").innerHTML = opciones[posActual][0];
    document.getElementById("op1").innerHTML = opciones[posActual][1];
    document.getElementById("op2").innerHTML = opciones[posActual][2];
  }
}
// "imagenes/"+ 

function terminarJuego() {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").textContent = cantadidAcertada;
  document.getElementById("numIncorrectas").textContent = banderas.length - cantadidAcertada;
}

function comprobarRespuesta(posInciso) {
  posInciso = posInciso - 1;
  cantadidAcertada += puntajePorOpcion[posActual][posInciso];
  posActual++;
  siguienteBandera();
}

function empezarNew() {
  document.getElementById("pantalla-inicial").style.display = "block";
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "none";
}
document.getElementById("op0").addEventListener("click", function() {
  comprobarRespuesta(1);
});
document.getElementById("op1").addEventListener("click", function() {
  comprobarRespuesta(2);
});
document.getElementById("op2").addEventListener("click", function() {
  comprobarRespuesta(3)
});

document.getElementById("ini").addEventListener("click", function() {
  empezarNew();
});
