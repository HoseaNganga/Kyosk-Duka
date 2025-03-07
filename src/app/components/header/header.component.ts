import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, FormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
