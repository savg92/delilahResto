# Delilah Resto API
 Esté proyecto plantea la creación de un sistema de pedidos online para un restaurante. Deberás poner en funcionamiento las partes necesarias para montar una REST API que permita realizar altas, bajas, modificaciones y obtención de información sobre una estructura de datos que podría consumir un cliente.

## Instrucciones
Instrucciones que permitirán la utilización de una copia de los archivos de forma local en tu computadora.

### Requisitos basicos
- Tener instalado NodeJS.
- Tener instalado MySQL.

### Instalacion
- Instalación de la base de datos. Podras realizar este proceso ejecutando en MySQL el archivo schema.sql ubicado en ***/delilahResto/seeders*** <br>
  (En cado caso de querer realizarlo por tu cuenta, dar el formato nombre de: **delilahResto**)
- Instalar las dependencias ejecutando:
  ```
  npm install
  ```
- Siguiendo el ejemplo existente en el archivo **.env.example**. <br>
  Crear un archivo ***.env*** en la raíz del proyecto y crear las variables del entorno a gusto.
- Abrir el archivo ***config.json*** ubicado en ***/delilahResto/config/*** y modifica las variables _username_ y _password_ de la sección ***development***, a las correspondientes a tu  base de datos.
- Ejecuta el siguiente comando para iniciar el servidor node del proyecto
  ```
  npm run start
  ```
  Ó en caso de tener instalado nodemon, puedes ejecutar este otro comando:
  ```
  npm run dev
  ```
- En caso de querer sumistrar datos de ejemplo a la base de datos Delilah Resto, ejecuta
  ```
  node_modules/.bin/sequelize db:seed:all
  ```

## Documentación
La documentación de la API puede encontrarse en el archivo **delilahResto.yaml** presente en el directorio raíz del repositorio.
Para mejor visualización, puedes ingresar a [swagger](https://editor.swagger.io/#).

Tambien se agregó el archivo **delilahResto.postman_collection.json** en el directorio raíz del repositorio para ser importado en POSTMAN; este ya contiene todas las rutas de la API.

Para iniciar las prubas de la API, se recomienda iniciar usando:
- El usuario ***ADMIN***.<br>
  _***username:*** aadmin <br>
  ***password:*** 123_

### Endpoints
La url base es 
127.0.0.1:{{port}}/

La API cuenta con los siguientes endpoints:
- /register
- /login
- /users
- /users/:idUser
- /products
- /products/:idProduct
- /orders
- /orders/:idOrder
- /orders/:idOrder/cancelation
- /items
- /items/:idItem
- /favorites
- /favorites/:idFavorite

## Construido con

Herramientas y/o paquetes usados en el proyecto:

- [NodeJS](https://nodejs.org/en/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-jwt](https://www.npmjs.com/package/express-jwt)
- [helmet](https://www.npmjs.com/package/helmet)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)