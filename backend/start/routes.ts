/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'



router.group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessToken, 'store'])
        router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('/profile', [controllers.Profile, 'show'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
    router.get('/', () => {
      return { hello: 'world' }
    })
    router.get("/notes/", () => {
      return {notes: "get yesyes"}
    })
    router.post("/notes/", () => {
      return {notes: "post yesyes"}
    })
    router.get("/notes/:id", ({params}) => {
      return {type: "get", value: params.id}
    })
    router.put("/notes/:id", ({params}) => {
      return {type: "put", value: params.id}
    })
    router.delete("/notes/:id", ({params}) => {
      return {type: "delete", value: params.id}
    })
  })
  .prefix('/api')
