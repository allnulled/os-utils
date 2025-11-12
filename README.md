# os-utils

API de Node.js para manipular ficheros en grupos con `glob` y ejecutar comandos de consola con `child_process.execSync`.

## Instalación

```sh
npm i -s @allnulled/os-utils
```

## Uso

```js
const OsUtils = require("@allnulled/os-utils");

const fileSelection = OsUtils.changeDirectory(__dirname).select("**/*.js");

fileSelection.execute("`cat ${file}`");
fileSelection.execute(file => `cat ${file}`);
```