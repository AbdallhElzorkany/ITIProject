import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, NgClass],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  public collapse: boolean;
  constructor() {
    this.collapse = false;
  }
  toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
