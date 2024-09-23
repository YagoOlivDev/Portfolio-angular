import { Component, signal } from '@angular/core';
import { iExperiences } from '../../interface/iExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiencies = signal<iExperiences[]>
  (
    [
      {
        summary: {
          strong: 'Desenvolvedor Full-stack',
          p: '(Java + Spring) e (TypeScript + Angular)',
        },
        text: "<p>Sou desenvolvedor fullstack em formação, com bastante experiência prática em Java + Spring e TypeScript + Angular</p>"
      },

      {
        summary: {
          strong: 'Aprendiz de TI',
          p: 'Atuo como Aprendiz de TI na Milano brasil.',
        },
        text: '<p>Minhas experiências inclue: Suporte técnico a colaboradores, reparos na infraestrutura, gerenciamento de planilhas, entre outros.</p>'
      },

      {
        summary: {
          strong: 'Formação Back-End Oracle',
          p: 'Adquiri uma formação de 6meses intensos de Java + Spring',
        },
        text: '<p>Nesta formação aprendi muito sobre criação de APIs Rest, manter a segurança nas aplicações, testes de unidades, padrões de projeto, entre muito mais.</p>'
      }
    ]
  )
}
