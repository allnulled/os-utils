# os-utils

API de Node.js para manipular ficheros en grupos con `glob` y ejecutar comandos de consola con `child_process.execSync`.

## Instalación

```sh
npm i -s @allnulled/os-utils
```

## Uso

```js
const OsUtils = require("@allnulled/os-utils");

OsUtils
    .changeDirectory(__dirname)
    .select("**/*.js")
    .execute("`cat ${file}`");
```