import { calcular } from "./logic.js";

export function inicializarApp() {
  const formulario = document.getElementById("calculadora");
  const primerNumero = document.getElementById("num_uno");
  const segundoNumero = document.getElementById("num_dos");
  const operador = document.getElementById("operador");
  const operacion = document.getElementById("operacion");
  const resultado = document.getElementById("total");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const a = primerNumero.valueAsNumber;
    const b = segundoNumero.valueAsNumber;

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      mensaje.textContent = "Ingresa dos números válidos.";
      return;
    }

    const simbolo = operador.value;
    const simbolosVisibles = { "*": "×", "/": "÷" };

    resultado.value = calcular(a, b, simbolo);
    operacion.textContent = `${a} ${simbolosVisibles[simbolo] ?? simbolo} ${b}`;
    mensaje.textContent = "";
    primerNumero.value = "";
    segundoNumero.value = "";
    primerNumero.focus();
  });
}
