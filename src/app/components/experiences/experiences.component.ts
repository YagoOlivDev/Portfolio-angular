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
        text: "<p>Como desenvolvedor fullstack em formação, tenho uma sólida base prática no desenvolvimento de back-end com Java e o framework Spring, onde aplico princípios como SOLID e o padrão MVC para construir APIs robustas e escaláveis. No front-end, estou ganhando cada vez mais experiência com TypeScript e Angular, desenvolvendo interfaces dinâmicas e responsivas, sempre visando a melhor experiência do usuário. Minha habilidade de transitar entre front-end e back-end me permite ter uma visão mais ampla dos projetos, garantindo uma integração eficaz entre as duas camadas da aplicação.</p>"
      },

      {
        summary: {
          strong: 'Aprendiz de TI',
          p: 'Atuo como Aprendiz de TI na Milano brasil.',
        },
        text: '<p>Como Aprendiz de TI, atuo prestando suporte técnico direto aos colaboradores, ajudando na resolução de problemas relacionados a hardware e software, além de realizar reparos e manutenções na infraestrutura de TI. Tenho experiência no gerenciamento de planilhas complexas, onde organizo e mantenho dados essenciais para o setor. Além disso, busco otimizar os processos internos através da automatização de tarefas repetitivas, garantindo maior eficiência nas operações diárias e facilitando a rotina da equipe.</p>'
      },

      {
        summary: {
          strong: 'Formação Back-End Oracle',
          p: 'Adquiri uma formação de 6meses intensos de Java + Spring',
        },
        text: '<p>Durante a formação back-end pela Oracle, adquiri conhecimentos sólidos na criação de APIs REST, com foco em segurança e boas práticas de desenvolvimento. Aprendi a implementar testes de unidade para garantir a qualidade do código e a aplicar padrões de projeto que tornam as aplicações mais robustas e escaláveis. Esse curso me proporcionou uma visão abrangente das melhores práticas para desenvolver APIs eficientes e seguros.</p>'
      }
    ]
  )
}
