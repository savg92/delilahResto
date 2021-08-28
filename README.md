# Delilah Resto API
 Esté proyecto plantea la creación de un sistema de pedidos online para un restaurante. Deberás poner en funcionamiento las partes necesarias para montar una REST API que permita realizar altas, bajas, modificaciones y obtención de información sobre una estructura de datos que podría consumir un cliente.

## Instrucciones
Instrucciones que permitirán la utilización de una copia de los archivos de forma local en tu computadora.

### Requisitos
- Tener instalado NodeJS.
- Tener instalado MySQL.

### Instalacion
- Instalación de la base de datos. Podras realizar este proceso ejecutando en MySQL el archivo schema.sql ubicado en /delilahResto/seeders
  (En cado caso de querer realizarlo por tu cuenta, dar el formato nombre de: **delilahResto**)
- Instalar las dependencias ejecutando:
  ```
  npm install
  ```
- Siguiendo el ejemplo existente en el archivo **.env.example**. Crear un archivo ***.env*** en la raíz del proyecto y crear las variables del entorno a gusto.
- Abrir el archivo config.json ubicado en ***/delilahResto/config/*** y modifica las variables _username_ y _password_ de la sección test, a las correspondientes a tu  base de datos.
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
Para mejor visualización, puedes importar este archivo a la pagina https://editor.swagger.io/# para mejor visualizacion con [swagger](https://editor.swagger.io/#).

Tambien se agregó el archivo **delilahResto.postman_collection.json** en el directorio raíz del repositorio para ser importado en POSTMAN; este ya contiene todas las rutas de la API.

Para iniciar las prubas de la API, se recomienda iniciar usando:
- El usuario ***ADMIN*** -> _***username:*** aadmin ***password:*** 123_

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

- NodeJS
- cors
- dotenv
- express
- express-jwt
- helmet
- jsonwebtoken
- mysql2
- sequelize
- sequelize-cli