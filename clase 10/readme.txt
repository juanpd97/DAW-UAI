Descripción del problema a resolver


La problemática de la semana 10 consiste en extender el diario online de la semana 08 para que al presionar el botón “enviar” se envien los datos cargados en el formulario a un servidor web mediante una llamada HTTP desde JavaScript.

En caso de que la validación de datos sea correcta, se deben enviar todos los datos del formulario a la siguiente URL: https://jsonplaceholder.typicode.com/ y al recibir la respuesta se debe mostrar un cartel (modal) con un mensaje indicando si la suscripción al newsletter fue exitosa o falló. 

En caso de ser exitosa, el modal debe mostrar también los datos recibidos como respuesta de la llamada HTTP. Además, se deben guardar los datos recibidos en LocalStorage y recargarlos la próxima vez que se refresque la pantalla.

En caso de que el código de respuesta indique un error, el modal debería mostrar detalles del error. No se debe guardar nada en el LocalStorage.

Subir todos los cambios a Github y responder la problemática con la URL de la página de Github Pages con el formulario funcionando.


Pasos a seguir:


Continuando con el proyecto del diario realizado en la Semana 03 crear un nuevo archivo subscription.html.
Agregar el código HTML para que tenga la estructura solicitada en la problemática semanal.
Agregar el código CSS necesario para que el formulario siga la estética del diario y que su diseño sea responsive.
Guardar los cambios en GIT, subirlos a Github y verificar que la página se visualiza correctamente en Github Pages.
Agregar el código JavaScript necesario para capturar el evento “blur” de cada campo, validar el contenido y mostrar el mensaje de error correspondiente.
Agregar el código JavaScript necesario para capturar el evento “focus” de cada campo y ocultar el mensaje de error si es que había uno.
Agregar el código JavaScript necesario para mostrar un cartel al presionar el botón “Enviar”.
Agregar el código JavaScript necesario para editar en tiempo real el título del formulario.
Hacer commits con el progreso y subir todos los cambios siempre verificando que se vea correctamente en Github Pages.
Responder a la Problemática Semanal 05 de Classroom con el link de Github de archivo html creado para el formulario de suscripción.