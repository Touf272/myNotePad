import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

export interface Note {
  title: string;
  content: string;
  id: Number;
  createdAt: string;
  updatedAt: string;
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

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl)
  }

  createNote(title: String, content: String) {
    return this.http.post(this.apiUrl, {
        title,
        content
      })
  }

  modifyNote(id: Number, title: String, content: String) {
    console.log("trying to modify: ", (this.apiUrl + id))
    return this.http.put(this.apiUrl + id,
      {
        title,
        content,
    });
  }

  deleteNote(id: Number) {
    return this.http.delete(this.apiUrl + id);
  }
}