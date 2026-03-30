/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    router.get('/', () => {
      return { hello: 'world' }
    })

    router.post('/notes', [controllers.NewNote, 'store']) // Create a new note

    router.get('/notes', [controllers.NewNote, 'index']) // get all notes

    router.get('/notes/:id', [controllers.NewNote, 'show']) // show specific note

    router.put('/notes/:id', [controllers.NewNote, 'update']) // modify specific note (title & data)

    router.delete('/notes/:id', [controllers.NewNote, 'destroy']) // destroy a note
  })
  .prefix('/api')