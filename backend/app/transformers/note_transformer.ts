import type Note from '#models/note'
import { BaseTransformer } from '@adonisjs/core/transformers'


/** NoteTransformer
 * 
 * transforms 'note' class into a migration file, to initialize DB
 */
export default class NoteTransformer extends BaseTransformer<Note> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ])
  }
}
