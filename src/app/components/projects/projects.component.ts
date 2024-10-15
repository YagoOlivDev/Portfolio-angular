import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../Enums/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>
  (
    [
      {
        src: 'assets/Screenmatch.png',
        alt: 'Projeto API ScreenMatch',
        title: 'ScreenMatch',
        width: '100px',
        height: '51px',
        description: '<p>ScreenMatch se consiste em uma API de filmes e séries que exibe as séries por tópicos, lançamentos, top 5, entre outros...</p>',
        links: [
          {
            name: 'Conheça o Projeto',
            href: 'https://github.com/YagoOlivDev/ScreenMatch'
          }
        ]
      },

      {
        src: 'assets/Api-voll.png',
        alt: 'Projeto API Voll-med',
        title: 'Consultorio',
        width: '100px',
        height: '51px',
        description: '<p>Voll-med se consiste em uma API de cadastramentos de uma clinica, onde você pode cadastrar médicos, pacientes e consultas...</p>',
        links: [
          {
            name: 'Conheça o Projeto',
            href: 'https://github.com/YagoOlivDev/voll-med-api'
          }
        ]
      },

      {
        src: 'assets/Angular&Spring.jpeg',
        alt: 'Projeto Fullstack',
        title: 'Crud Fullstack',
        width: '100px',
        height: '101px',
        description: '<p>Este crud foi feito na intenção de aprimorar minhas habilidades como fullstack, ligando ponto a ponto no desenvolvimento.</p>',
        links: [
          {
            name: 'Conheça o Projeto',
            href: 'https://github.com/YagoOlivDev/API-Course-Spring-Angular'
          }
        ]
      },
    ]
  );

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
