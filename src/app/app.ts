import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Docxgenerator } from './docxgenerator/docxgenerator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Docxgenerator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
