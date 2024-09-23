import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { KnoledgeComponent } from '../../components/knoledge/knoledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnoledgeComponent, ExperiencesComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss'
})
export class HomeComponent {

}
