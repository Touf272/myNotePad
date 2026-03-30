import Note from '#models/note'
import { createValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import NoteTransformer from '#transformers/note_transformer'


/**
 * @class NewNoteController
 * 
 * Contains functions that will be used by routes to interact with DB
 */
export default class NewNoteController {
  async index() { // Sends a list of every note
    try {
      console.log("Listing")
      return await Note.all()
    } catch (e) {
      console.log("Err Create")
      return null
    }
  }
  async show({ params }: HttpContext) { // send data of a specific note
     console.log("Show")
    return await Note.findOrFail(params.id)
  }
  async store({ request, serialize }: HttpContext) { // Create a new note
    console.log("Create")
    const { title, content } = await request.validateUsing(createValidator)

    const newNote = await Note.create({ title, content })

    return serialize({
      note: NoteTransformer.transform(newNote),
    })
  }
  async update({ params, request }: HttpContext) { // Modify a note
    console.log("Update")
    const note = await Note.findOrFail(params.id)

    const data = request.only(['title', 'content'])

    note.merge(data)
    await note.save()

    return note
  }
  async destroy({ params }: HttpContext) { // Delete a note
    console.log("Delete")
    const note = await Note.findOrFail(params.id)
    await note.delete()
    return { message: 'Deleted' }
  }
}
