// Implementa aquí tu solución.
import { calcular } from "./functions.js";

const primerNumero = document.getElementById("num_uno");
const segundoNumero = document.getElementById("num_dos");
const operador = document.getElementById("operador");
const resultado = document.getElementById("total");
const operacion = document.getElementById("operacion");
const botonCalcular = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

botonCalcular.addEventListener("click", () => {
  const a = primerNumero.valueAsNumber;
  const b = segundoNumero.valueAsNumber;

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    mensaje.textContent = "Por favor, ingresa dos números válidos.";
    return;
  }

  const simbolo = operador.value;
  resultado.value = calcular(a, b, simbolo);
  operacion.textContent = `${a} ${simbolo} ${b}`;
  mensaje.textContent = "";
  primerNumero.value = "";
  segundoNumero.value = "";
});
