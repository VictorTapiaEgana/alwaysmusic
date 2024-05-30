
# Desafío - Always Music.

Un CRUD a una base de datos PostgreSQL, por consola de comando
 
![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)

## Estructura de Carpetas:
```
└── 📁Desafio BBDD - 1
    └── 📁functions
        └── funciones.js    
    └── package-lock.json
    └── package.json    
    └── server.js
```

## Dependencias
```
  "dependencies": {
    "chalk": "^4.1.2",
    "pg": "^8.11.5"
  }

```

## instalacion
```
 https://github.com/VictorTapiaEgana/alwaysmusic.git
 npm install
 npm start
```

## Uso

```
  npm start {ACCION, PARAMETROS[.....]}
```
  EJEMPLO:
```
     npm start insertar 44999666-8 Juan Java 7
```

  Esto, inserta un nuevo registro con el rut nombre curso y nivel, indicados 
  
  Otras acciones:

  ```
  npm start listado
  ```
Muestra los ususarios registrados en la bbdd
 ```
  npm start eliminar 44999666-8
 ```
Elimina el registro con el rut indicado  
 ```
  npm start actualizar 44999666-8 Jose Bootspring 10
 ```
Cambia el nombre,curso y nivel al registro com el rut 44999666-8 
 ```
  npm start seleccionar 44999666-8
 ```
devuelve el registro cuyo rut sea 44999666-8

