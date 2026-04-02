/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'new_note.store': {
    methods: ["POST"]
    pattern: '/api/notes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/note').createValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/note').createValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'new_note.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/notes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['index']>>>
    }
  }
  'new_note.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/notes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['show']>>>
    }
  }
  'new_note.update': {
    methods: ["PUT"]
    pattern: '/api/notes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['update']>>>
    }
  }
  'new_note.destroy': {
    methods: ["DELETE"]
    pattern: '/api/notes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_note_controller').default['destroy']>>>
    }
  }
}
