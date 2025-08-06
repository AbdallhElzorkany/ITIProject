import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  public firstSection: {
    img: string;
    category: string;
    title: string;
    author: string;
  }[] = [
    {
      img: 'helmut.jpeg',
      category: 'PHOTOGRAPHY',
      title: 'HELMUT LANGCELEBRATES TAXIDRIVERS WORLDWIDE INLATEST CAMPAIGN',
      author: 'BY ALESSANDRA ORTIZ',
    },
    {
      img: 'bowlcut.jpeg',
      category: 'PHOTOGRAPHY',
      title:
        'BOWLCUT LAUNCH A NEW SUMMER COLLECTION THAT PAYS HOMAGE TO "UK LEGENDS"',
      author: 'BY ROSANNA ONDRICKA',
    },
    {
      img: 'thousands.jpeg',
      category: 'PHOTOGRAPHY',
      title:
        'THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL WILL BE MADE PUBLIC THIS AUTUMN',
      author: 'BY ANNIE LUEILWITZ',
    },
    {
      img: 'london.jpeg',
      category: 'INTERACTIVE DESIGN',
      title: "LONDON-BASED YINKA ILORI'S STORYTELLING FURNITURE",
      author: 'BY ANNIE LUEILWITZ',
    },
    {
      img: 'anonymous.jpeg',
      category: 'GRAPHIC DESIGN',
      title:
        'ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGAZ DIRECT MUSIC VIDEO FOR U2 AND BECK',
      author: 'BY SIMEON BREKKE',
    },
    {
      img: 'suzzanne.jpeg',
      category: 'ARCHITECTURE',
      title:
        "SUZANNE SAROFF'S METICULOUSLY ARRANGED PHOTOGRAPHS ALTER PERCEPTIONS",
      author: 'BY RETA TORPHY',
    },
  ];
  constructor() {}
}
