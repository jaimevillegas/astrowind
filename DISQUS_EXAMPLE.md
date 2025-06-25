# Ejemplo de configuración de Disqus

## Archivo: src/config/disqus.ts

```typescript
export const DISQUS_CONFIG = {
  // ⚠️ IMPORTANTE: Reemplaza esto con tu shortname real de Disqus
  // Ejemplo: si tu sitio en Disqus es https://mi-blog.disqus.com/
  // entonces tu shortname es 'mi-blog'
  shortname: 'jvdevsolutions', // <- Cambia esto por tu shortname
  
  settings: {
    reactions: true,        // Habilitar reacciones (me gusta, no me gusta, etc.)
    lazy: true,            // Carga perezosa de comentarios para mejor rendimiento
    language: 'es',        // Idioma por defecto (es = Español, en = Inglés)
    inputPosition: 'bottom' // Posición del input de comentarios
  }
};
```

## Pasos para obtener tu shortname:

1. **Crear cuenta en Disqus:**
   - Ve a https://disqus.com/
   - Haz clic en "Get Started"
   - Selecciona "I want to install Disqus on my site"

2. **Configurar tu sitio:**
   - **Site name**: "JV Dev Solutions Blog" (o el nombre que prefieras)
   - **Category**: Tech/Programming
   - **Language**: Spanish o English

3. **Obtener el shortname:**
   - Después de crear el sitio, ve a Settings > General
   - Ahí encontrarás tu "Shortname"
   - También aparece en la URL: https://TU-SHORTNAME.disqus.com/

4. **Configurar el dominio:**
   - En Settings > General
   - **Website URL**: https://jvdevsolutions.com (tu dominio real)

5. **Configurar comentarios de invitados:**
   - Ve a Settings > Community
   - Habilita "Guest Commenting" ✅
   - Esto permite comentarios sin registro

## Ejemplo con shortname real:

```typescript
export const DISQUS_CONFIG = {
  shortname: 'jvdevsolutions', // Tu shortname real aquí
  settings: {
    reactions: true,
    lazy: true,
    language: 'es', // Para español
    inputPosition: 'bottom'
  }
};
```

## Verificación:

Una vez configurado correctamente, los comentarios aparecerán en todas las páginas de blog que usen el componente `<Comments />`.

Los usuarios podrán:
- Comentar sin registrarse (como invitados) ✅
- Usar su cuenta de Disqus, Google, Facebook, Twitter ✅
- Ver comentarios en tiempo real ✅
- Recibir notificaciones por email ✅
