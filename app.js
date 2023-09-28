const numOne = document.getElementById("numOne");
numOne.innerHTML = `
    <h1>Hoisting</h1>
    <p>Hoisting te permite usar funciones y variables antes de que se hayan declarado.</p>

    <h2>1. ¿Qué es hoisting?</h2>
    <p>Genera 'undefined' y que no falla o genera un error. > Se debe a que el intérprete de JS divide la declaración y asignación de funciones y variables: JS "hoists" o "alza" tus declaraciones a la parte superior de su scope(ámbito) antes de la ejecución. (Hoisting)</p>

    <h2>2. Hoisting de variables en JS</h2>
    <p>En JS, declaramos una variable con var, let, y const.
    Asignamos un valor a una variable usando el operador de asignación.</p>

    <h2>3. Hoisting de variables con 'var'</h2>
    <p>El uso de una variable no declararada antes de su asignación también mostrará un 'ReferenceError' porque no ha hecho hoisting a ninguna declaración</p>

    <h2>4. Hoisting de variables con 'let' y 'const'</h2>
    <p>Reciben hoisting, pero no son inicializadas con un valor por defecto.</p> 
    <p>Acceder a una variable declarada con 'let' o 'const' antes de que sea declarada resulta en un 'ReferenceError'</p>
    <p>- Se debe a la zona muerta temporal (temporal dead zone, TDZ)</p>
    <p>* TDZ: comienza al principio del ámbito de la variable y finaliza cuando se declara.</p>
    <p> - Está presente en los parámetros de unción predeterminados (por defecto), que se evalúan de izquierda a derecha.</p>

    <h2>5. 'typeof' en la TDZ</h2>
    <p>El uso de una variable 'let' o 'const' como operando del operador 'typeof' en la TDZ arrojará un error</p>
    <p>- Sin embargo, no pasa cuando se utiliza una variable con 'var' antes de que sea declarada porque se inicializa on 'undefined' cuando se le hace el hoisting</p>
    <p>De hecho(사실상), con la introducción de 'let' y 'const' se rompe la garantía de 'typeof' de siempre devolver un valor cadena para cualquier operando.</p>

    <h2>6. Hoisting de funciones en JS</h2>
    <p>Las declaraciones de funciones también son sometidas(복종된) a hoisting. > Esto nos permite llamar a funciones antes de que sean definidas.</p>

    <h2>7. Cómo utilizar hoisting en JS</h2>
    <p>Hoisting de variables: debido a la confusión que el hoisting con variables 'var' puede crear, es mejor evitar usar las variables antes de que sean declaradas. Si estás escribiendo código en un proyecto greenfiled, deberías usar 'let' y 'const' para que esto se cumpla.</p>
    <p>Hoisting de funciones: es útil porque podemos dejar la implementación de la función más abajo en el archivo y dejar que el lector se concentre en lo que está haciendo el código.</p>
`;
// 1. ¿Qué es hoisting?
console.log(foo);
var foo = 'foo'; 


// 2. Hoisting de variables en JS
// Declaraciñon
var foo;
let bar;
// Asignación
foo = 'foo';
bar = 'bar';


// 3. Hoisting de variables con 'var'
// console.log(foo);
// foo= 'foo';


// 4. Hoisting de variables con 'let' y 'const'
// function tapasbar(tapas = bar, bar = 'bar'){
//     console.log(tapas);
// }

// tapasbar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization.

function tapasbar(tapas = 'tapas', bar = tapas) {
    console.log(bar);
}
tapasbar(); //"tapas"


// 5. 'typeof' en la TDZ
// console.log(typeof paella); // Uncaught ReferenceError: Cannot access 'paella' before initialization.
// let paella = 'paella';
console.log(typeof paella); // "undefined"
var paella = 'paella';


// 6. Hoisting de funciones en JS
afrojack(); // "afrojack"
function afrojack() {
    console.log('afrojack');
}


// 7. Cómo utilizar hoisting en JS
reiniciarPuntos();
dibujarTablero();
poblarTablero();
comenzarJuego();

function reiniciarPuntos() {
    console.log("Reinicializando puntos");
}

function dibujarTablero() {
    console.log("Dibujando tablero");
}

function poblarTablero() {
    console.log("Poblando tablero");
}

function comenzarJuego() {
    console.log("Comenzando juego");
}