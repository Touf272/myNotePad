import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Note, NoteService } from '../Services/note.service';

// Goodbye process, prints goodbye and can redirect to Hello
@Component({
  selector: 'app-hello',
  imports: [RouterLink],
  templateUrl: './gb.html',
  styleUrl: './gb.css',
})
export class Gb {
  note?: Note;

  constructor(
    private noteService: NoteService,
  ) {}
  create(titleElement: HTMLElement, contentElement: HTMLElement) {
    const title = titleElement.innerText.trim();
    const content = contentElement.innerText.trim();
    this.noteService.createNote(title, content).subscribe({
      next: (res) => {
        console.log('Created note:', res);
      },
      error: (err) => {
        console.error('Error creating note:', err);
      }
    });
  }
}
