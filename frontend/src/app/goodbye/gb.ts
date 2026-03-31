import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Goodbye process, prints goodbye and can redirect to Hello
@Component({
  selector: 'app-hello',
  imports: [RouterLink],
  templateUrl: './gb.html',
  styleUrl: './gb.css',
})
export class Gb {}
