# Microfront

### ¿Qué son los micro frontend?
El término Micro Frontends apareció por primera vez en ThoughtWorks Technology Radar a finales de 2016. Extiende los conceptos de los micro servicios al mundo del frontend. La tendencia actual es crear una aplicación de navegador potente y rica en características, también conocida como “single page app”, que se asiente sobre una arquitectura de microservicio. Con el tiempo, la capa de frontend, a menudo desarrollada por un equipo independiente, crece y se vuelve más difícil de mantener. Eso es lo que llamamos una Interfaz Monolítica.

La idea detrás de Micro Frontends es pensar en un sitio web o aplicación web como una composición de características que son propiedad de equipos independientes. Cada equipo tiene un área de negocio definida o misión de la que se preocupa y se especializa. Un equipo es cross functional y desarrolla sus características end-to-end, desde la base de datos hasta la interfaz de usuario.

Sin embargo, esta idea no es nueva. Tiene mucho en comun con el concepto de Sistemas autocontenidos. En el pasado se llamaba Integración de Frontend para Sistemas Verticales. Pero Micro Frontends es claramente un término más amigable y menos voluminoso.
(Micro Frontends, 2023)

Jackson consultor en Thoughtworks da la primera definición de microfront en el año 2016
```
An architectural style where independently deliverable frontend applications are composed into a greater whole
(Jackson,2016)
```

## Beneficios

Los micro frontends enfatizan atributos y beneficios sobre enfoques técnicos específicos, centrándose en beneficios como actualizaciones incrementales, que permiten a las organizaciones modernizar gradualmente su frontend sin necesidad de una reescritura total. Este enfoque permite a los equipos ofrecer nuevas funciones sin estar lastrados por un frontend monolítico.

Los micro frontends también promueven bases de código simples y desacopladas al dividir el frontend en partes más pequeñas y manejables. Esto reduce la complejidad y el acoplamiento no intencionado entre componentes. Si bien los micro frontends simplifican las bases de código, no reemplazan la necesidad de prácticas de código limpio.

Otro beneficio clave es el despliegue independiente. Cada micro frontend se puede desplegar de forma independiente, reduciendo el alcance del despliegue y los riesgos asociados. Este enfoque permite canalizaciones de entrega continua para cada micro frontend, lo que les permite ser desplegados en producción sin verse obstaculizados por otros códigos o canalizaciones.

Además, los micro frontends respaldan a los equipos autónomos al permitirles ser dueños de una sección de un producto desde la concepción hasta la producción. Los equipos se forman en torno a segmentos verticales de funcionalidad empresarial, asegurando una mayor cohesión y eficiencia en comparación con los equipos formados en torno a capacidades técnicas.

En resumen, los micro frontends implican dividir aplicaciones grandes en partes más pequeñas y manejables y ser explícitos acerca de sus dependencias. Este enfoque permite que las elecciones tecnológicas, las bases de código, los equipos y los procesos de lanzamiento funcionen y evolucionen de forma independiente, reduciendo la sobrecarga de coordinación.


## Desventajas 
### Tamaño de la carga útil
 Los paquetes de JavaScript construidos de forma independiente pueden causar duplicación de dependencias comunes, lo que aumenta la cantidad de bytes que tenemos que enviar por la red a nuestros usuarios finales. Esto puede afectar el rendimiento de la página y la experiencia del usuario, especialmente en regiones con infraestructura de internet más lenta.

### Diferencias de entorno
 Aunque es útil poder desarrollar un micro frontend de forma independiente y en un entorno de desarrollo simplificado, esto también puede llevar a diferencias entre el entorno de desarrollo y el entorno de producción. Esto puede resultar en problemas de integración y comportamientos inesperados al implementar en producción.

### Complejidad operativa y de gobernanza
 Al adoptar micro frontends, se gestionará y operará más infraestructura, herramientas, repositorios, pipelines de construcción/despliegue, servidores, dominios, etc. Esto puede aumentar la complejidad operativa y de gobernanza, lo que requiere una mayor automatización y capacidad de gestión.

En resumen, aunque los micro frontends ofrecen beneficios como actualizaciones incrementales y equipos autónomos, también tienen costos asociados, como la complejidad de la gestión operativa y de gobernanza, así como la posibilidad de problemas de tamaño de carga útil y diferencias de entorno. Estos aspectos deben tenerse en cuenta al decidir adoptar una arquitectura de micro frontends.


## ¿Cuándo usar microfrontends?
Los microfrontends resultan adecuados para aplicaciones de gran tamaño con varias funciones. Si se considera que el proyecto tendrá problemas de escalabilidad, se debe utilizar la arquitectura microfrontend.

El mejor enfoque es dividir la aplicación en conjuntos aislados de funciones y pantallas, tal como un teléfono móvil, que posee diferentes aplicaciones con diferentes funciones. Así, hay una aplicación para marcar el teléfono, una de contactos para almacenar números telefónicos y una de mensajería para enviar mensajes de texto.

Aunque estas aplicaciones interactúan entre sí, cada una tiene una finalidad muy específica, por lo cual están implementadas como aplicaciones independientes.

Otro ejemplo es un sistema administrativo para una universidad. Allí se tendrá una página para administrar los perfiles de los estudiantes, una para los perfiles del personal, otra para los horarios de los cursos, para los resultados de los exámenes, etc.


## References
Jackson, C. (n.d.). Micro Frontends. Martinfowler.com. Retrieved March 10, 2024, from https://martinfowler.com/articles/micro-frontends.html

Micro Frontends - Extendiendo la idea de microservicio al desarrollo frontend. (n.d.). Micro Frontends. Retrieved March 10, 2024, from https://micro-frontends-es.org/

Microfrontends ¿qué son y cuándo usarlos? - Aplyca. (n.d.). Aplyca Tecnología SAS. Retrieved March 10, 2024, from https://www.aplyca.com/blog/microfrontends-que-son-y-cuando-usarlos



# Primeros pasos con microfront

### prerequisistos
 * Node 18+
 * Module federetion
 * yarn v1.22+

## iniciar proyectos 

#### paso 1

En la raiz de cada proyecto ejecutar el siguiente comando

```
yarn install

```
#### paso 2

Ejecutar el comando para iniciar 

```
yarn start

```



