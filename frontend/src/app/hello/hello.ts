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
  note: Note= {
    id: 0,
    title: '',
    content: '',
    createdAt: "",
    updatedAt: ""
  };
  actId: number = 1;

  constructor(
    private noteService: NoteService,
    private cdr: ChangeDetectorRef
  ) {}


  public setVar(newId: number) { // Modifies actId to change focused value
    if (newId < 1)
      return;
    this.actId = newId;
  }

  save(titleElement: HTMLElement, contentElement: HTMLElement) {
    if (this.actId == 0) {
      console.log("Create")
      this.noteService.createNote(
        titleElement.innerText.trim(),
        contentElement.innerText.trim()).subscribe();
    } else {
      console.log("Modify n°", this.actId)
      this.noteService.modifyNote(
        this.actId,
        titleElement.innerText.trim(),
        contentElement.innerText.trim()).subscribe();
    }
  } 

  ngOnInit() { // initializes the current note to be modofied. If actId is at 0, then the note is treated as a new one
    if (this.actId != 0)
      this.noteService.getNote(this.actId).subscribe(data => {
        this.note = data;
        this.cdr.detectChanges();
      });
  }
}
