---
publishDate: 2025-06-20T00:00:00Z
author: Jaime Villegas
title: 5 Mejores extensiones de VSCode que todo desarrollador debería usar en 2025 (con IA y productividad)
excerpt: En mundo cada vez más ocupado, necesitamos herramientas que nos permitan impulsar nuestra productividad para centrarnos en el objetivo y no en el proceso.
image: ~/assets/images/posts/vscode-extensions/cover.png
category: Programación
tags:
  - VSCode
  - extensiones
  - productividad
  - programación
---

Visual Studio Code se ha convertido en el editor de código más popular en los últimos años. Con una comunidad cada vez más grande, nos encontramos con una herramienta capaz de adaptarse de forma óptima a casi cualquier necesidad del desarrollo de software. Lo malo: hay un océano inmenso de elecciones. Miles de extensiones que prometen ayudarnos en tareas particulares. Esto, en muchos casos, en lugar de ayudarnos, nos deja atrapados en un bucle interminable de elecciones antes de permitirnos concentrarnos en nuestro trabajo.
Este post promete exponer de manera concisa una serie de extensiones cuidadosamente seleccionadas que nos ayudarán a mejorar nuestro rendimiento como desarrolladores, enfocándonos en el fin último y más importante: completar nuestros proyectos enfocándonos en crear, en lugar de perdernos averiguando cómo funciona cada herramienta.
¡Empecemos con la lista! Aquí no hay un orden específico, tampoco un nicho definido. Estoy seguro que las extensiones que encontrarás aquí te van a ser muy útiles independientemente si eres data scientist, desarrollador web, o programador en assembler (si aún existen).


## Better Comments
Esta joya nos permitirá escribir comentarios contextuales. ¿Qué significa eso? Pongamos un ejemplo.
Estamos desarrollando una función específica, pero nos falta definir unas variables, eliminar una línea que no hace nada, añadir una pequeña línea de comentario que explique qué propósito cumple esa función, y una pregunta que debemos resolver la próxima vez que revisitemos esa pieza de código. Bien podríamos pensar en comentar al final de cada línea problemática la falla, o documentar todo al inicio de la función. Estoy seguro que esos comentarios se perderán después ya que quedarán todos grises en la misma función. No hay diferenciación. Aquí entra better comments. Veamos el ejemplo anterior usando la extensión:
![Better comments example](../../../assets/images/posts/vscode-extensions/1.png)
¿Qué pasa en esa imagen? Vemos varias líneas numeradas, cada una de ellas es un comentario, pero con diferentes colores. Son comentarios contextuales, cada uno tiene un color diferente y está pensado para transmitir un mensaje diferente. Veamos:
1. Es un comentario informativo, se activa poniendo un asterisco después de la definición del comentario (En cualquier lenguaje que estés trabajando). Se muestra en color verde.
2. Es un comentario importante, se activa con el signo de interrogación. Se muestra en color rojo.
3. Otro comentario informativo.
4. Es una pregunta. Se activa con el signo de pregunta. Se muestra en color azul.
5. Otro comentario informativo.
6. Es un TODO. Quiere decir que es una tarea que se debe realizar. Se activa escribiendo TODO después de la definición del comentario. Se muestra en color naranja.

Vemos entonces aquí una navaja suiza de los comentarios, permitiéndonos personalizarlos de acuerdo al contexto que le queremos otorgar. Después, si revisitamos esa pieza de código o si alguien más se une al proyecto, podrá tener información clara acerca de qué hace la función, qué le hace falta y cuáles son sus puntos importantes.

## Error Lens
En nuestro trabajo es inevitable encontrarnos con errores y advertencias. Pasa todo el tiempo. Estamos escribiendo una función y de repente esta se resalta de color rojo indicando que algo hay allí; ¿Qué podría ser? apartamos nuestras manos del teclado, agarramos el mouse y nos vamos hacia la línea problemática a dar clic sobre el subrayado rojo a ver qué error pasó. Ya no estamos en nuestro estado de flow (estado mental de concentración plena, altamente productivo), nuestras manos están en posiciones diferentes y va a costar valiosos segundos volver a estar en modo productivos. Este simple hecho de apartar las manos del teclado para ir al mouse puede parecer trivial, pero repetido varias veces se vuelve significativo.
Error lens se encargará de mostrar cualquiera que sea el error o la advertencia al lado de la línea de error, así, mientras estamos codeando podemos de un sólo vistazo ver qué mensaje trata de mostrarnos el error. Esto facilitará considerablemente nuestra vida como desarrolladores, aumentando nuestra productividad y evitando que salgamos de ese preciado estado de flow.
![Error lens 1](../../../assets/images/posts/vscode-extensions/2.png)
En la imagen nos encontramos con 3 errores. Lo típico es ir con el mouse hasta el subrayado rojo y esperar a que nos aparezca un tooltip con el error asociado, quitándonos tiempo. Activemos ahora Error Lens:
![Error lens 2](../../../assets/images/posts/vscode-extensions/3.png)
Vemos que la extensión automáticamente muestra el mensaje de error en la parte derecha. Ahora no tenemos la necesidad de interrumpir nuestro flujo de trabajo para mirar de qué error se trata. ¡Maravilloso!

## Indent Rainbow
Perderse entre líneas de código es fácil, y más cuando llevamos nuestro proyecto en una etapa más avanzada. Si estamos en python por ejemplo, sabemos que la indentación juega un papel crucial para el funcionamiento correcto de nuestro script. Si le damos mal manejo a esto podemos tener errores al tratar de ejecutar nuestro proyecto y la mayoría de las veces resulta muy confuso saber a qué nivel de sangría pertenece nuestro bloque. Indent Rainbow llega a solucionar este problema, coloreando cada bloque de indentación para que sea más fácil de leer. Sin más palabras, esta imagen lo explica todo, ¡Un plugin infaltable!
![Indent rainbow antes](../../../assets/images/posts/vscode-extensions/4.png)
![Indent rainbow después](../../../assets/images/posts/vscode-extensions/5.png)
## Bookmarks
Es natural que entre más avancemos en nuestro proyecto, más extenso se volverá nuestro código, y una parte vital de nuestras tareas es revisitar diversas secciones del código para depurar, refactorizar, completar, o eliminar funcionalidades. La labor de buscar por una palabra clave relacionada a la función que estamos buscando, o de intentarse acordar de la línea que queremos buscar requiere tiempo y energía. Bookmarks llega para resolver ese problema. Nos permitirá crear de manera fácil marcadores a lo largo de todo nuestro archivo, para que podamos ir a esas distintas partes con fluidez y rapidez.
![Bookmarks](../../../assets/images/posts/vscode-extensions/6.png)
Al instalar la extensión, se nos habilitará su barra de herramientas activable desde la parte izquierda. el atajo de teclado `CTRL + ALT + K` nos permitirá establecer un marcador en la línea de código donde estemos situados, y la barra de herramientas mostrará un outline de todos los marcadores añadidos. Adicionalmente, al lado del número de la línea podremos reconocer un marcador por su ícono azul. ¡Súper útil!

## GitHub Copilot
La inteligencia artificial llegó para quedarse, y sus capacidades crecen de manera exponencial cada día. Estamos en un punto de inflexión en el que debemos elegir si dejar que haga nuestro trabajo, o aprender a usarla como una herramienta que nos haga más productivos. Estamos de acuerdo en que queremos lo último. GitHub Copilot es una extensión que habilitará modelos de Inteligencia Artificial para que nos ayude con nuestras tareas de código. Podemos elegir entre el modo chat que nos proveerá un asistente conversacional, o el modo agente que habilita el modelo a elección (desde una lista desplegable) para que haga cambios en nuestro código de manera autónoma según el requerimiento que le alimentemos.
Activar la extensión es sencillo, y una vez activa, se nos habilitará una barra lateral derecha en la que podemos empezar a tener una conversación con algún modelo de IA. Copilot pone a nuestra disposición un plan gratuito y uno pago, si nuestras necesidades aumentan o si lo estamos usando en un equipo de trabajo. Podría extenderme hablando de esta herramienta y de cómo podríamos usarla de manera eficaz, pero eso lo dejaré para un post único. ¡Te invito a echarle un vistazo!
![GitHub Copilot](../../../assets/images/posts/vscode-extensions/7.png)
En la imagen vemos copilot habilitado. En la parte inferior podemos iniciar una conversación, incluir los archivos que el modelo usará como referencia, seleccionar entre el modo chat o agente, seleccionar el modelo que nos responderá el prompt y adjuntar contenido adicional.

## ¿Qué opinas?
¿Usas alguna otra extensión que te haya cambiado la vida como desarrollador? Déjala en los comentarios y puede ser que la incluya en la próxima edición. ¡Gracias por leer!
