# ME GUSTAN LOS NEPES

**Autor**: Achraf El Ouakili El Merouani

*Página web:* https://rawgit.com/ach74/Test/master/index.html

> En este proyecto teníamos como objetivo realizar una página web, que dentro de esta contuviera un formulario/examen, que seria corregido posteriormente.
> 
> Como teníamos al opción de hacer el formulario con XML o con JSON, yo me he decantado por hacerlo con JSON ya que lo he considerado más fácil.

La página Web que he realizado para que contenga el formulario tiene una temática orientada a un club de moteros.

![Imagen del navegador de la pagina Web](https://github.com/ach74/Test/blob/master/img/Captura-1.PNG)

La opción para entrar a hacer el test es la de **Inscribirte**, las demás opciones la he puesto de relleno para no crear una página web en blanco. Una vez le demos se nos abrirá el test, que coge las preguntas de un JSON y la imprime en el HTML con el JavaScrip llamado [examen.js](https://github.com/ach74/Test/blob/master/js/examen.js). El JavaScrip con nombre [js.js](https://github.com/ach74/Test/blob/master/js/js.js), pertenece a la pagina web. Y los CSS con nombre [css.css](https://github.com/ach74/Test/blob/master/css/css.css) pertenece a los dispositivos de mayor tamaño de pantalla. Y el CSS con nombre [mobil.css](https://github.com/ach74/Test/blob/master/css/mobil.css) pertenece a los dispositivos de menos tamaño de pantalla tales como mobiles, tablets .... Estos dos CSS son compartidos entra [index.html](https://github.com/ach74/Test/blob/master/index.html) (el que contiene la página web) y el [exam.html](https://github.com/ach74/Test/blob/master/exam.html) ( el que contiene el formulario).

El código para rellenar preguntas es muy simple ya que en JSON ya tienes la array de datos creada, y solo tienes que imprimir la información (es uno de los motivos por el cual he elegido JSON) y eso te ahora trabajo, ya que no tienes que crear un bucle para meter los datos XML y otro para imprimirlos en el HTML.

>Una ves se habrá el test de examen tendrá la siguiente distribución:
>
- 2 preguntas tipo texto.
- 2 preguntas tipo selec.
- 2 preguntas tipo select multiple.
- 2 preguntas tipo checkbox.
- 2 preguntas tipo radio.
- 1 botón de corrección.

Las respuestas correctas del test son las siguientes:

 1. Respuesta de la pregunta: 9
 2. Respuesta de la pregunta: 3
 3. Respuesta de la pregunta: 18
 4. Respuesta de la pregunta: Talmacsi
 5. Respuesta de la pregunta: Casco integral, Cascos jet
 6. Respuesta de la pregunta: 2, 3
 7. Respuesta de la pregunta: Keeway, KTM
 8. Respuesta de la pregunta: Jarama, Circuito de Jerez
 9. Respuesta de la pregunta: 10
 10. Respuesta de la pregunta: La biblia de las curvas

## Recursos utilizados:
- Colores para el diseño: https://htmlcolorcodes.com/es/
- Orientación para el diseño de la pagina web: https://www.w3schools.com/w3css/w3css_templates.asp
- Para codificar la página web y todo lo relacionado he usado SublimeText-3: https://www.sublimetext.com/
- Compresor de imagen online: http://compressjpeg.com/es/
- Creacion de README : https://stackedit.io/app

>En esta mismo proyecto hay una ramificación con todo el código minimificado.
