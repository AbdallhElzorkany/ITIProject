import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {
  private activatedRoute = inject(ActivatedRoute);
  private readonly name: string;
  constructor() {
    this.name = this.activatedRoute.snapshot.params['name'];
    console.log(this.name);
  }
}
