# nuxt-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Add React bundle

1. run `yarn build` inside `react-app`
2. copy whole `react-app/build/static` folder to `nuxt-app/static/` (resulting in `nuxt-app/static/static`)
3. update `App.html` with new file names
