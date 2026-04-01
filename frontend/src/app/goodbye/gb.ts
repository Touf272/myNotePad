import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Note, NoteService } from '../Services/note.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-gb',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gb.html',
  styleUrl: './gb.css',
})

export class Gb implements OnInit {
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
  loadNotes() {
    console.log("loading notes")
    this.noteService.getAllNotes().subscribe({
      next: (res) => {
        console.log("response: ", res)
        this.notes = res;
        console.log("real notes: ", this.notes);
        this.cdr.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }
  delete(id: Number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}
