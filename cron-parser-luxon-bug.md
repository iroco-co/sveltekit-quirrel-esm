- Bug Luxen
    - Transformation EsBuild
    - Downgrade version de luxen
    - Option de Bruno
    - importer luxon comme dépendance runtime
    - importer luxon avec require (implique de rajouter require en devdep)
    - Voir sur les issues de vite
    - si des gens ont pas le même problème avec d'autres
        - Diffuser sur leur discord?
    - version de vite?
    - Quirrel Non
    - Qui contacter / ou contribuer?
        - cron-parser :
            - Compatilibté API cron-parser/luxon :
              - 3.2.1 ✅
                - 3.3.0 ✅
                - 3.4.3 ❌ FAIL ​ ./test/parser_crondate_formats.js
            - Compatibilté : module es6
                - modifier le package.json de cron-parser avec
                - ⏸️ : on met pause cette option pour tenter de creuser la piste vite
        - luxon
        - vite?
            - Au niveau du plugin svelte?
            - svelte-config.js
                - adapter-node : https://kit.svelte.dev/docs/adapter-node
                    - let's try `polyfill:false` since it is not required after node 18.11+
                        - 📛 We still have the same issue (we are guessing it is not a polyfill concern)
                -
                - preprocess
                    - https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#babel
                    - babel preprocessor : https://github.com/sveltejs/svelte-preprocess#modern-javascript-syntax
                        - It seems that babel is not used explicitely in our case. Let's halt this lead for now
                        - ⏸️ We still have the same issue (we are guessing it is not a polyfill concern)
                    - typescript : i
                    - replace value :
                        - re


we made a small change code javascript: 

```javascript
const test_re = /import (!{.*) from 'luxon'/
const test_re2 = /import (.*), (.*) from 'luxon'/

const lineToMatch= "import require$$0$4, { DateTime } from 'luxon'"
const transformed = lineToMatch.replace(test_re, "import * as $1 from 'luxon'")
console.log(transformed)

console.log("import { DateTime } from 'luxon'".replace(test_re, "import * as $1 from 'luxon'"))
//console.log(transformed.replace(test_re2, "import $1 from 'luxon';\nimport $2 from 'luxon';"))

// import require$$0$4, { DateTime } from 'luxon'
// import * as require$$0$4, { DateTime } from 'luxon'

// import { DateTime } from 'luxon'
// import { DateTime } from 'luxon'
```
