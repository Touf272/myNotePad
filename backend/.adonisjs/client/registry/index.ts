/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'new_note.store': {
    methods: ["POST"],
    pattern: '/api/notes',
    tokens: [{"old":"/api/notes","type":0,"val":"api","end":""},{"old":"/api/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['new_note.store']['types'],
  },
  'new_note.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/notes',
    tokens: [{"old":"/api/notes","type":0,"val":"api","end":""},{"old":"/api/notes","type":0,"val":"notes","end":""}],
    types: placeholder as Registry['new_note.index']['types'],
  },
  'new_note.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/notes/:id',
    tokens: [{"old":"/api/notes/:id","type":0,"val":"api","end":""},{"old":"/api/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['new_note.show']['types'],
  },
  'new_note.update': {
    methods: ["PUT"],
    pattern: '/api/notes/:id',
    tokens: [{"old":"/api/notes/:id","type":0,"val":"api","end":""},{"old":"/api/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['new_note.update']['types'],
  },
  'new_note.destroy': {
    methods: ["DELETE"],
    pattern: '/api/notes/:id',
    tokens: [{"old":"/api/notes/:id","type":0,"val":"api","end":""},{"old":"/api/notes/:id","type":0,"val":"notes","end":""},{"old":"/api/notes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['new_note.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
