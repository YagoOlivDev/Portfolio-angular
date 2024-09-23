import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knoledge',
  standalone: true,
  imports: [],
  templateUrl: './knoledge.component.html',
  styleUrls: ['./knoledge.component.scss']
})
export class KnoledgeComponent {
  public arrayKnoledge = signal
  (
    [
      {
        src: '/assets/icons/angular.svg',
        alt: 'conhecimentos de Angular',
      },

      {
        src: 'assets/icons/html.svg',
        alt: 'conhecimentos de html',
      },

      {
        src: 'assets/icons/bdd.svg',
        alt: 'conhecimentos de Banco de dados',
      },

      {
        src: 'assets/icons/css.svg',
        alt: 'conhecimentos de Css',
      },

      {
        src: 'assets/icons/docker.svg',
        alt: 'conhecimentos de Docker',
      },

      {
        src: 'assets/icons/java.svg',
        alt: 'conhecimentos de Java',
      }
    ]
  )
}
