import { Component, signal } from '@angular/core';
import { Iknoledge } from '../../interface/Iknoledge.interface';

@Component({
  selector: 'app-knoledge',
  standalone: true,
  imports: [],
  templateUrl: './knoledge.component.html',
  styleUrls: ['./knoledge.component.scss']
})
export class KnoledgeComponent {
  public arrayKnoledge = signal<Iknoledge[]>
  (
    [
      {
        src: 'assets/icons/java.svg',
        alt: 'conhecimentos de Java',
      },

      {
        src: 'assets/icons/spring.svg',
        alt: 'conhecimentos de Spring',
      },

      {
        src: 'assets/icons/angular.svg',
        alt: 'conhecimentos de Angular',
      },

      {
        src: 'assets/icons/mysql.svg',
        alt: 'conhecimentos de Banco de dados',
      },

      {
        src: 'assets/icons/html.svg',
        alt: 'conhecimentos de html',
      },

      {
        src: 'assets/icons/css.svg',
        alt: 'conhecimentos de Css',
      },

      {
        src: 'assets/icons/docker.svg',
        alt: 'conhecimentos de Docker',
      },
    ]
  )
}
