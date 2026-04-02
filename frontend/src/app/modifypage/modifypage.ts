import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../Services/note.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-modifypage',
  standalone: true,
  templateUrl: './modifypage.html',
  styleUrl: './modifypage.css',
  imports: [RouterLink],
})

export class modifyPage implements OnInit {
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
      this.cdr.markForCheck();
    });
  }

  // Save the current note
  save(titleElement: HTMLElement, contentElement: HTMLElement) {
    this.noteService.modifyNote(
      this.actId,
      titleElement.innerText.trim(),
      contentElement.innerText.trim()
    ).subscribe();
  }
}
