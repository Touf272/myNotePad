import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

export interface Note {
  title: string;
  content: string;
  id: Number;
  createdAt: string;
  updatedAt: string;
}

export interface NoteList {
  items: Array<Note>
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:3333/api/notes/';

  constructor(private http: HttpClient) {}

  getNote(id: Number): Observable<Note> {
    console.log(this.apiUrl + id)
    return this.http.get<Note>(this.apiUrl + id);
  }
  getAllNotes(): Observable<NoteList> {
    return this.http.get<NoteList>(this.apiUrl)
  }
}