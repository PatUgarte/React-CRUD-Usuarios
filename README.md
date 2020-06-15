# React CRUD Usuarios

### Proyecto desarrollado utilizando ReactJS, se trata de una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application) de administración de usuarios.

#### Cumpliendo con las operaciones de un [CRUD](https://es.wikipedia.org/wiki/CRUD) clásico.

* Creación de nuevos usuarios.
* Listado de usuarios activos.
* Edición de los datos de un usuario.
* Borrado del usuarios.

---
## Clonación y ejecución del proyecto

> **Prerrequisito:**
> Tener instalado **NodeJS** en su computadora.  
_En caso de no tenerlo instalado ingresar [aquí](https://nodejs.org/en/download/) y descargar la versión LTS (Long Time Support) compatible con su Sistema Operativo._

### Descarga del proyecto:

1. #### Opción para programadoras/es
    Teniendo git instalado, abrir la terminal, posicionarse en la carpeta donde quieras clonar el proyecto y ejecutar el comando:

`$ git clone https://github.com/PatUgarte/React-CRUD-Usuarios.git`

2. #### Opción para no programadoras/es
    * Ingresar al [repositorio en GitHub de este proyecto](https://github.com/PatUgarte/React-CRUD-Usuarios) y hacer click en el botón verde que dice **_Clone or download_** y luego elegir la opción **_Dowload ZIP_**.
    * Guardar el archivo comprimido en la carpeta donde quieras ubicar el proyecto y descomprimir.

### Puesta en marcha del proyecto:

1. Posicionarte con la terminal dentro de la carpeta que hayas elegido para ubicar el proyecto, una vez ahí ejecutár el comando:   

`$ npm i`  
* _Esto recreará la carpeta **node_modules/** en la raíz del proyecto, instalando todas las dependencias necesarias para su ejecución (react, babel, webpack, etc.)._
> _Nota: **npm** es un comando que viene incluido en la instalación de **NodeJS**._
---
2. Desde la misma posición en la terminal, ejecutar el comando:

`$ npm run create `
* _Es un **script** definido dentro del proyecto que ejecutará el comando **webpack** (dependencia instalada en el primer paso) y generará una carpeta **dist/** en la raíz del proyecto siguiendo la configuración de Webpack definida (la podés encontrar en el archivo **webpack.config.js**)._
---
3. Con todo ya instalado y configurado correctamente solo resta poner en marcha el proyecto, para esto ejecutar el comando:

`$ npm start `
* _Es un **script** definido dentro del proyecto que levantará el **webpack-dev-server** (dependencia instalada en el primer paso), este sevidor iniciará la aplicación en el [http://localhost:8080](http://localhost:8080) y la abrirá automáticamente el navegador por defecto de su computadora._
> _Nota: si el puerto **8080** estuviera siendo utilizado el **webpack-dev-server** intentará iniciar en el puerto **8081** y así de forma ascendente hasta localizar un puerto desocupado._
---
4. Para finalizar la ejecución del servidor simplemente basta con ir a la terminal donde se encuentra corriendo y hacer **_Ctrl + C_**.