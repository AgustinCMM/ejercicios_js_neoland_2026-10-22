const exerciseIds = [
  'calculadora-con-historial', 'boton-de-un-solo-uso', 'contador-en-pantalla',
  'cambiador-de-estilos', 'generador-de-correos', 'cuenta-caracteres',
  'alias-de-importacion', 'piedra-papel-o-tijeras', 'replicador',
  'boton-que-se-autodescribe', 'validador-de-edad', 'inversor-de-palabras',
  'importacion-masiva', 'lista-de-tareas-basica', 'multi-modulos',
  'contrasena-secreta', 'eventos-de-teclado', 'la-funcion-espia',
  'calculadora-dinamica', 'app-completa-modular'
];
const storageKey = 'practica-funciones-estados-v1';
const defaults = () => ({ version: 1, statuses: Object.fromEntries(exerciseIds.map((id) => [id, 'pendiente'])) });
const message = document.querySelector('[data-state-message]');
let state = defaults();

function announce(text, kind = '') {
  if (!message) return;
  message.textContent = text;
  message.classList.toggle('error', kind === 'error');
  message.classList.toggle('success', kind === 'success');
}

function parseState(value) {
  const parsed = typeof value === 'string' ? JSON.parse(value) : value;
  if (!parsed || parsed.version !== 1 || !parsed.statuses || typeof parsed.statuses !== 'object' || Array.isArray(parsed.statuses)) {
    throw new Error('El archivo no tiene el formato de estados esperado.');
  }
  const next = defaults();
  for (const id of exerciseIds) {
    const value = parsed.statuses[id];
    if (value !== 'pendiente' && value !== 'resuelto') {
      throw new Error('El JSON debe incluir un estado válido para cada ejercicio.');
    }
    next.statuses[id] = value;
  }
  return next;
}

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) state = parseState(saved);
  } catch {
    announce('El navegador no permite acceder al almacenamiento local en este contexto.', 'error');
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    return true;
  } catch {
    announce('No se pudo guardar el estado en el almacenamiento local del navegador.', 'error');
    return false;
  }
}

function renderStatuses() {
  document.querySelectorAll('[data-status]').forEach((badge) => {
    const value = state.statuses[badge.dataset.status] || 'pendiente';
    badge.dataset.value = value;
    badge.textContent = value === 'resuelto' ? 'Resuelto' : 'Pendiente';
  });
  document.querySelectorAll('[data-toggle-status]').forEach((button) => {
    const value = state.statuses[button.dataset.toggleStatus] || 'pendiente';
    button.textContent = value === 'resuelto' ? 'Marcar como pendiente' : 'Marcar como resuelto';
    button.setAttribute('aria-pressed', String(value === 'resuelto'));
  });
}

function downloadState() {
  const blob = new Blob([`${JSON.stringify(state, null, 2)}\n`], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'estados-ejercicios.json';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce('Copia JSON descargada.', 'success');
}

document.querySelectorAll('[data-toggle-status]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.toggleStatus;
    state.statuses[id] = state.statuses[id] === 'resuelto' ? 'pendiente' : 'resuelto';
    const saved = saveState();
    renderStatuses();
    if (saved) announce('Estado guardado en este navegador.', 'success');
    else announce('El estado cambió en esta página, pero este navegador no permitió guardarlo. Exporta el JSON para conservarlo.', 'error');
  });
});

document.querySelector('[data-export-status]')?.addEventListener('click', downloadState);
document.querySelector('[data-import-status]')?.addEventListener('change', async (event) => {
  const [file] = event.target.files || [];
  if (!file) return;
  try {
    state = parseState(await file.text());
    const saved = saveState();
    renderStatuses();
    if (saved) announce('Estados importados y guardados en este navegador.', 'success');
    else announce('Estados importados en esta página, pero el navegador no permitió guardarlos localmente. Exporta el JSON para conservarlos.', 'error');
  } catch (error) {
    announce(error instanceof SyntaxError ? 'El archivo seleccionado no contiene JSON válido.' : error.message, 'error');
  } finally {
    event.target.value = '';
  }
});

loadState();
renderStatuses();
