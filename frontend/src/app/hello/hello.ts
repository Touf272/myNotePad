import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../Services/note.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  imports: [RouterLink],
})

export class Hello implements OnInit {
  note: Note = {
    id: 0,
    title: '',
    content: '',
    createdAt: "",
    updatedAt: ""
  };

  actId: number = 0;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.actId = Number(this.route.snapshot.paramMap.get('id'));

    this.noteService.getNote(this.actId).subscribe(data => {
      this.note = data;
      console.log(this.note)
      this.cdr.markForCheck();
    });
  }

  save(titleElement: HTMLElement, contentElement: HTMLElement) {
    this.noteService.modifyNote(
      this.actId,
      titleElement.innerText.trim(),
      contentElement.innerText.trim()
    ).subscribe();
  }
}
