import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'


/** Note
 * class creations
 *
 * @var id identifer of note, setup automatically
 * @var title title of the note. Cannot be more than 100 characters
 * @var content content of the node. May be empty
 * @var createdAt date & hour of creation. Setup automatically
 * @var updatedAt date & hour of last modification. Modified automatically
 */
export default class Note extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare content: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
