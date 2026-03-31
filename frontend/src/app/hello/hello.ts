import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../Services/note.service';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  imports: [RouterLink],
})

export class Hello implements OnInit {
  note?: Note;

  constructor(
    private noteService: NoteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.noteService.getNote(1).subscribe(data => {
      this.note = data;
      this.cdr.detectChanges();
    });
  }
}
