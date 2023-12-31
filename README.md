# Prueba Final Modulo 7 - Cursos Bootcamp - Part 1

Este proyecto corresponde a la prueba final del modulo 7 - Acceso a datos en aplicaciones Node, para el bootcamp **Desarrollo de Aplicaciones Full Stack JavaScript Trainee v2.0 Vespertino**.

### Ejercicio Propuesto 🚀

Dentro del marco de lo aprendido durante este Drill (modulo), se desea diseñar la
gestión de cursos Bootcamp de una determinada empresa de adiestramiento. En este primer Sprint se obtiene el diseño inicial de la base de datos, el cual consta del registro de
usuarios y de cursos Bootcamp, con una relacion **many to many**. Utilizando el **ORM Sequelize** y definiendo los End points en un servidor **NodejS** con **Express**.

### Requerimientos ⚙️

1. Hacer uso de Node.JS para el desarrollo.
2. Partir de la siguiente estructura para el desarrollo:

```
- app
   - config
      - db.config.js
   - controllers
      - bootcamp.controller.js
      - user.controller.js
   - models
      - index.js
      - bootcamp.model.js
      - user.model.js
- node_modules
- package-lock.json
- package.json
- server.js
```

3. Crear dentro de la carpeta config, el archivo db.config.js, que posee la configuración a la
   base de datos; el nombre de ésta es: db_bootcamp.
4. Dentro de la carpeta models, se encuentran los modelos tanto para el usuario
   (user.model.js), como para el Bootcamp (bootcamp.model.js)
   Los atributos para el usuario son:

-   firstName: cadena de caracteres y campo obligatorio.
-   lastName: cadena de caracteres y campo obligatorio.
-   email: campo obligatorio, y con las siguientes validaciones: formato de correo y que sea
    único, no repetitivo en la base de datos.
    Los atributos para el Bootcamp son:
-   title: cadena de caracteres que define el título del Bootcamp, campo obligatorio.
-   cue: número que define la cantidad de sesiones (CUE) que contiene el Bootcamp, campo
    obligatorio con las siguientes validaciones: tipo entero con un valor mínimo de 5 CUE y
    como máximo 10.
-   description: cadena de caracteres que define la descripción o el objetivo del Bootcamp,
    campo obligatorio.
    Y el archivo index.js, donde se define la conexión con sequelize a la base de datos y modelos.

5. En la carpeta controllers posee los controladores tanto para el usuario (user.controller js), como para el Bootcamp (bootcamp.controller.js).

Para el usuario, construir los siguientes controladores:

-   Crear y guardar usuarios llamado createUser.
-   Obtener los Bootcamp de un usuario llamado findUserById.
-   Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
-   Actualizar usuario por Id llamado updateUserById.
-   Eliminar un usuario por Id llamado deleteUserById.

Para el Bootcamp, construir los siguientes controladores:

-   Crear y guardar un nuevo Bootcamp llamado createBootcamp.
-   Agregar un Usuario al Bootcamp llamado addUser.
-   Obtener los Bootcamp por id llamado findById.
-   Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.

6. Por último, para verificar los modelos y las relaciones con sus métodos, se crea el archivo server.js, donde hacemos uso de la base de datos, los modelos y los controladores.

Crear los siguientes usuarios:

| firstname | lastname  | email                        |
| --------- | --------- | ---------------------------- |
| Mateo     | Díaz      | mateo.diaz@correo.com        |
| Santiago  | Mejías    | santiago.mejias@correo.com   |
| Lucas     | Rojas     | lucas.rojas@correo.com       |
| Facundo   | Fernandez | facundo.fernandez@correo.com |

Crear los siguientes Bootcamp:

| title                                                          | cue | description                                                                                                                                                          |
| -------------------------------------------------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Introduciendo El Bootcamp De React.                            | 10  | React es la librería más usada en JavaScript para el desarrollo de interfaces.                                                                                       |
| Bootcamp Desarrollo Web Full Stack.                            | 12  | Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular MongoDB, ExpressJS.                      |
| Bootcamp Big Data, Inteligencia Artificial & Machine Learning. | 18  | Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning. |

Agregar los siguientes usuarios al Bootcamp:

| title                                                          | users                                    |
| -------------------------------------------------------------- | ---------------------------------------- |
| Introduciendo El Bootcamp De React.                            | Mateo Díaz, Santiago Mejías              |
| Bootcamp Desarrollo Web Full Stack.                            | Mateo Díaz                               |
| Bootcamp Big Data, Inteligencia Artificial & Machine Learning. | Mateo Díaz, Santiago Mejías, Lucas Rojas |

---

## RESPUESTAS:

### Preparacion en Base de Datos PostgreSQL 💾

Creacion de role `bootcamp_user` en PosgreSQL CLI.

```shell
CREATE USER bootcamp_user WITH PASSWORD '1234';
```

Creacion de Base de datos `db_bootcamp` y asignación de role.

```shell
CREATE DATABASE db_bootcamp OWNER bootcamp_user;
```

### Ejecución Servidor 🤖

IMPORTANTE: Se debe customizar previamente el archivo `.env`.

Instalación:

```
npm install
```

Ejecución de servidor en unix:

```
npm run dev
```

### Sincronización con la base de datos medante scripts

`npm run sync-db` = Inserción de modelos definidos en la base de datos.

`npm run sync-users` = Inserción de usuarios en la entidad user.

`npm run sync-bootcamps` = Inserción de bootcamps en la entidad bootcamp.

`npm run sync-user-bootcamp` = Inserción de relaciones en la entidad user_bootcamp.

### REALIZAR LAS SIGUIENTES CONSULTAS (Postman / Thunder Client):

-   Consulta el Bootcamp por id, incluyendo los usuarios.

    ```
    http://localhost:3000/bootcamp/findById/1
    ```

-   Listar todos los Bootcamp con sus usuarios.

    ```
    http://localhost:3000/bootcamps
    ```

-   Consultar un usuario por id, incluyendo los Bootcamp.

    ```
    http://localhost:3000/user/findUserById/1
    ```

-   Listar los usuarios con sus Bootcamp.

    ```
    http://localhost:3000/users
    ```

-   Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro
    Sánchez.

    ```
    http://localhost:3000/user/update/id/1/firstname/Pedro/lastname/Sánchez/email/pedro.sanchez@correo.com
    ```

-   Eliminar un usuario por id; por ejemplo: el usuario con id=1.

    ```
    http://localhost:3000/user/delete/id/1
    ```

---

Create by [varayac](https://github.com/varayac) with ♥️
