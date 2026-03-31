import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'new_note.store': { paramsTuple?: []; params?: {} }
    'new_note.index': { paramsTuple?: []; params?: {} }
    'new_note.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_note.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'new_note.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_note.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'new_note.index': { paramsTuple?: []; params?: {} }
    'new_note.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'new_note.index': { paramsTuple?: []; params?: {} }
    'new_note.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'new_note.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'new_note.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}