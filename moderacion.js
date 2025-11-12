// Sistema de moderación automática para Secret Talk
// Copiar este contenido y pegarlo en un archivo llamado "moderacion.js"

const palabrasOfensivas = [
  // Insultos comunes
  'idiota', 'tonto', 'estúpido', 'imbécil', 'estupido',
  // Palabras violentas
  'matar', 'morir', 'suicidio', 'muerte',
  // Acoso
  'feo', 'gordo', 'flaco', 'enano',
  // Discriminación
  'racista', 'homofóbico',
  // Contenido sexual explícito
  'sexo explícito', 'pornografía',
  // Palabras personalizables según tu criterio
];

// Función para detectar palabras ofensivas
function contienePalabrasOfensivas(texto) {
  const textoMinusculas = texto.toLowerCase();
  const palabrasEncontradas = [];
  
  for (let palabra of palabrasOfensivas) {
    if (textoMinusculas.includes(palabra.toLowerCase())) {
      palabrasEncontradas.push(palabra);
    }
  }
  
  return {
    esOfensivo: palabrasEncontradas.length > 0,
    palabras: palabrasEncontradas
  };
}

// Función para censurar palabras ofensivas
function censurarTexto(texto) {
  let textoCensurado = texto;
  
  for (let palabra of palabrasOfensivas) {
    const regex = new RegExp(palabra, 'gi');
    textoCensurado = textoCensurado.replace(regex, '*'.repeat(palabra.length));
  }
  
  return textoCensurado;
}

// Función para obtener nivel de severidad
function obtenerNivelSeveridad(palabrasEncontradas) {
  if (palabrasEncontradas.length === 0) return 'limpio';
  if (palabrasEncontradas.length <= 2) return 'leve';
  if (palabrasEncontradas.length <= 5) return 'moderado';
  return 'severo';
}

// Exportar funciones (si usas este archivo como módulo)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    contienePalabrasOfensivas,
    censurarTexto,
    obtenerNivelSeveridad
  };
}