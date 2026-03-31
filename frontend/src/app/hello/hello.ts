import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Hello process, prints goodbye and can redirect to Goodbye
@Component({
  selector: 'app-hello',
  imports: [RouterLink],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {}
