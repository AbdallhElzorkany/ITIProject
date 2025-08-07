import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
  public team: {
    name: string;
    img: string;
    title: string;
  }[];
  public touch: {
    num: number;
    title: string;
    description: string;
  }[];
  constructor() {
    this.team = [
      {
        name: 'Simeon Peterson',
        img: 'simeon.jpg',
        title: 'Cofounder, Editor in Chief',
      },
      {
        name: 'Simeon Brekke',
        img: 'brekke.jpg',
        title: 'Cofounder, Partner',
      },
      {
        name: 'Annie Lueilwitz',
        img: 'annie.jpg',
        title: 'Managing Editor',
      },
      {
        name: 'reta torphy',
        img: 'reta.jpg',
        title: 'Managing Editor',
      },
      {
        name: 'Leo Bartell',
        img: 'leo.jpg',
        title: 'Editor',
      },
      {
        name: 'Clem Onojeghuo',
        img: 'clem.jpg',
        title: 'Senior Writer',
      },
      {
        name: 'Michal Legros',
        img: 'legros.jpg',
        title: 'Senior Writer',
      },
      {
        name: 'Rosanna Ondricka',
        img: 'rosanna.jpg',
        title: 'Writer',
      },

      {
        name: 'Alessandra Ortiz',
        img: 'ortiz.jpg',
        title: 'Writer',
      },
      {
        name: 'Coby Gottlieb',
        img: 'coby.jpg',
        title: 'Writer',
      },
    ];
    this.touch = [
      {
        num: 1,
        title: 'address',
        description: '144 N 7th St. #536 Brooklyn, NY 11249 United States',
      },
      {
        num: 2,
        title: 'ageneral INQUIRIES',
        description: 'hello@noiceland.co',
      },
      {
        num: 3,
        title: 'PRESS inquiries',
        description: 'press@noiceland.co',
      },
      {
        num: 4,
        title: 'potential contributors',
        description: 'collab@noiceland.co',
      },
    ];
  }
}
