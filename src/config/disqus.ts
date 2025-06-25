export const DISQUS_CONFIG = {
  // Reemplaza esto con tu shortname real de Disqus
  // Lo obtienes cuando creas una cuenta de Disqus y configuras tu sitio
  shortname: 'jvdevsolutions',
  
  // Configuración de Disqus
  settings: {
    reactions: true,        // Habilitar reacciones (me gusta, no me gusta, etc.)
    lazy: true,            // Carga perezosa de comentarios para mejor rendimiento
    language: 'es',        // Idioma por defecto (es = Español, en = Inglés)
    inputPosition: 'bottom' // Posición del input de comentarios
  }
};

// Configuraciones específicas por idioma
export const DISQUS_LANGUAGES = {
  en: 'en',
  es: 'es'
};

// Función para obtener configuración específica por idioma
export function getDisqusConfig(language: 'en' | 'es' = 'es') {
  return {
    ...DISQUS_CONFIG,
    settings: {
      ...DISQUS_CONFIG.settings,
      language: DISQUS_LANGUAGES[language]
    }
  };
}
