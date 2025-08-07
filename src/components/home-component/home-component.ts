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
      author: 'ALESSANDRA ORTIZ',
    },
    {
      img: 'bowlcut.jpeg',
      category: 'PHOTOGRAPHY',
      title:
        'BOWLCUT LAUNCH A NEW SUMMER COLLECTION THAT PAYS HOMAGE TO "UK LEGENDS"',
      author: 'ROSANNA ONDRICKA',
    },
    {
      img: 'thousands.jpeg',
      category: 'PHOTOGRAPHY',
      title:
        'THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL WILL BE MADE PUBLIC THIS AUTUMN',
      author: 'ANNIE LUEILWITZ',
    },
    {
      img: 'london.jpeg',
      category: 'INTERACTIVE DESIGN',
      title: "LONDON-BASED YINKA ILORI'S STORYTELLING FURNITURE",
      author: 'ANNIE LUEILWITZ',
    },
    {
      img: 'anonymous.jpeg',
      category: 'GRAPHIC DESIGN',
      title:
        'ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGAZ DIRECT MUSIC VIDEO FOR U2 AND BECK',
      author: 'SIMEON BREKKE',
    },
    {
      img: 'suzzanne.jpeg',
      category: 'ARCHITECTURE',
      title:
        "SUZANNE SAROFF'S METICULOUSLY ARRANGED PHOTOGRAPHS ALTER PERCEPTIONS",
      author: 'RETA TORPHY',
    },
  ];
  public latestPosts: {
    img: string;
    category: string;
    title: string;
    author: string;
  }[] = [
    {
      img: 'japan.jpeg',
      category: 'Illustration',
      title: 'Japan House opens in mountainside to foster peak creativity.',
      author: 'RETA TORPHY',
    },
    ...this.firstSection,
    {
      img: 'anu.jpeg',
      category: 'GRAPHIC DESIGN',
      title:
        'Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches',
      author: 'Leo Bartell',
    },
  ];
  public featuredPosts: {
    img: string;
    category: string;
    title: string;
    author: string;
  }[] = [
    {
      img: 'brief.jpeg',
      category: 'Graphic Design',
      title: 'A Brief History of the FIFA World Cup Logo',
      author: 'Clem Onojeghuo',
    },
    {
      img: 'need.jpeg',
      category: 'Graphic Design',
      title:
        'Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back',
      author: 'Alessandra Ortiz',
    },
    {
      img: 'fred.jpeg',
      category: 'Photography',
      title: 'Fred Rowson directs film for Years and Years',
      author: 'Coby Gottlieb',
    },
    {
      img: 'mc.jpeg',
      category: 'Illustration',
      title:
        'M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas',
      author: 'Annie Lueilwitz',
    },
  ];
  constructor() {}
}
