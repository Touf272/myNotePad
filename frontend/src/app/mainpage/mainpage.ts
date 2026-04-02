import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Note, NoteService } from '../Services/note.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})

export class mainPage implements OnInit {
  note: Note = {
    id: 0,
    title: '',
    content: '',
    createdAt: "",
    updatedAt: ""
  };
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private cdr: ChangeDetectorRef) {
    console.log('Gb instance created');
  }

  ngOnInit() {
    this.loadNotes();
  }

  // Load / update every note
  loadNotes() {
    this.noteService.getAllNotes().subscribe({
      next: (res) => {
        this.notes = res;
        this.cdr.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }

  // Sort note list based on criteria
  sortNotes(criteria: string) {
    this.notes.sort((a, b) => {
      if (criteria === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (criteria === 'createdAt' || criteria === 'updatedAt') {
        return new Date(b[criteria]).getTime() - new Date(a[criteria]).getTime();
      }
      return 0;
    });
  }

  // Delete a specific note
  delete(id: Number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }

  // Create a new note
  new() {
    this.noteService.createNote(
      "New note",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ).subscribe(() => {
      this.loadNotes()
    });
  }
}
