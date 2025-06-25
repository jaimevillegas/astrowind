# Configuración de Disqus

Este proyecto ahora usa Disqus para el sistema de comentarios, lo que permite a los usuarios comentar sin necesidad de tener una cuenta de GitHub.

## Configuración Inicial

### 1. Crear una cuenta en Disqus

1. Ve a [https://disqus.com/](https://disqus.com/)
2. Haz clic en "Get Started"
3. Selecciona "I want to install Disqus on my site"
4. Completa la información de tu sitio:
   - **Site name**: Nombre de tu sitio (ej: "JV Dev Solutions Blog")
   - **Category**: Selecciona la categoría más apropiada
   - **Language**: Español o el idioma que prefieras

### 2. Configurar el shortname

Después de crear tu sitio en Disqus, obtendrás un **shortname** único. Este aparecerá en la URL como: `https://TU-SHORTNAME.disqus.com`

### 3. Actualizar la configuración

Edita el archivo `/src/config/disqus.ts` y reemplaza `YOUR_DISQUS_SHORTNAME` con tu shortname real:

```typescript
export const DISQUS_CONFIG = {
  shortname: 'tu-shortname-real', // Cambia esto por tu shortname
  settings: {
    reactions: true,
    lazy: true,
    language: 'es', // Cambia a 'es' para español
    inputPosition: 'bottom'
  }
};
```

### 4. Configuración en Disqus

En tu panel de Disqus (Admin > Settings):

1. **General Settings**:
   - Website URL: `https://tudominio.com`
   - Shortname: Verifica que sea correcto

2. **Community Settings**:
   - **Guest Commenting**: ✅ Activar (permite comentarios sin registro)
   - **Comment Voting**: ✅ Activar
   - **Reactions**: ✅ Activar

3. **Moderation Settings**:
   - **Pre-moderation**: Configura según tus preferencias
   - **Links in comments**: Permitir o requerir aprobación

## Ventajas de Disqus

- ✅ **Comentarios sin registro**: Los usuarios pueden comentar como invitados
- ✅ **Múltiples opciones de login**: Google, Facebook, Twitter, Disqus
- ✅ **Moderación avanzada**: Panel de administración completo
- ✅ **Anti-spam**: Filtros automáticos de spam
- ✅ **Responsive**: Se adapta a dispositivos móviles
- ✅ **Notificaciones**: Email cuando hay nuevos comentarios
- ✅ **Analytics**: Estadísticas de engagement
- ✅ **Fácil migración**: Si quieres cambiar después

## Personalización

### Cambiar tema
Disqus se adaptará automáticamente al tema de tu sitio (claro/oscuro).

### Configuración de idioma
Para cambiar el idioma, modifica la configuración en `/src/config/disqus.ts`:

```typescript
settings: {
  language: 'es', // Para español
  // o 'en' para inglés
}
```

### Deshabilitar comentarios en páginas específicas
Si quieres deshabilitar comentarios en ciertas páginas, simplemente no incluyas el componente `<Comments />` en esas páginas.

## Migración desde Giscus

Los comentarios anteriores de Giscus (GitHub Discussions) no se migrarán automáticamente. Si quieres preservar comentarios importantes:

1. Exporta los datos de GitHub Discussions
2. Crea posts equivalentes en Disqus manualmente para comentarios importantes
3. O mantén ambos sistemas temporalmente con una nota explicativa

## Soporte

Si tienes problemas:
1. Verifica que el shortname esté correcto
2. Asegúrate de que el dominio esté configurado en Disqus
3. Revisa la consola del navegador para errores de JavaScript
4. Consulta la [documentación oficial de Disqus](https://help.disqus.com/)

## Configuración de Producción

Antes de deployment:
- ✅ Configura el shortname correcto
- ✅ Verifica la URL del sitio en Disqus
- ✅ Configura las opciones de moderación
- ✅ Prueba la funcionalidad en staging
