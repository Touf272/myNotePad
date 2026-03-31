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
    router.post('/', [controllers.NewNote, 'store']) // Create a new note

    router.get('/', [controllers.NewNote, 'index']) // get all 

    router.get('/:id', [controllers.NewNote, 'show']) // show specific note

    router.put('/:id', [controllers.NewNote, 'update']) // modify specific note (title & data)

    router.delete('/:id', [controllers.NewNote, 'destroy']) // destroy a note
  })
  .prefix('/api/notes')