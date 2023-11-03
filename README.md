# sveltekit-quirrel-esm
[![Build app](https://github.com/iroco-co/sveltekit-quirrel-esm/actions/workflows/build.yaml/badge.svg)](https://github.com/iroco-co/sveltekit-quirrel-esm/actions/workflows/build.yaml)

A crontab sveltekit app that works with [quirrel](https://quirrel/dev).

Now there is a clash between luxon and es6 settings :

When launching "production" version with node:

```shell
npm run prod
```

Then loading the home page is generating a 500 error with:

```shell
Listening on 0.0.0.0:3000
file:///home/dev/src/sveltekit-quirrel-esm/build/server/chunks/_server.ts-f169324c.js:11
import require$$0$4 from 'luxon';
       ^^^^^^^^^^^^
SyntaxError: The requested module 'luxon' does not provide an export named 'default'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:131:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:213:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async Promise.all (index 1)
    at async render_page (file:///home/dev/src/sveltekit-quirrel-esm/build/server/index.js:3161:19)
    at async resolve (file:///home/dev/src/sveltekit-quirrel-esm/build/server/index.js:3886:24)
    at async respond (file:///home/dev/src/sveltekit-quirrel-esm/build/server/index.js:3772:22)
    at async Array.ssr (file:///home/dev/src/sveltekit-quirrel-esm/build/handler.js:1221:3)
```

## Creating the project

Created with:

```bash
npm create svelte@latest sveltekit-quirrel-esm
```

Then updated to create a link with quirrel

## Quirrel setting

You must launch quirrel, with docker it is: 

```shell
docker run -ti -p 9181:9181 -e PASSPHRASES=quirrel_passphrase ghcr.io/quirrel-dev/quirrel:1.13.4
```

Once you've ran quirrel, you have to generate a token:

```bash
npm run initQuirrel
```

## Building

To create a production version of your app:

```bash
npm ci
npm run dev
```

To build a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

