/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  newNote: {
    store: typeof routes['new_note.store']
    index: typeof routes['new_note.index']
    show: typeof routes['new_note.show']
    update: typeof routes['new_note.update']
    destroy: typeof routes['new_note.destroy']
  }
}
