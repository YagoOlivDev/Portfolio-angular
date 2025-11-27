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
          strong: 'Analista de Automação | RPA Pleno',
          p: 'Analista de Automação | RPA Pleno na Quality Digital',
        },
        text: "<p>Desenvolvimento autônomo de projetos de automação utilizando UiPath, desde a análise de requisitos até a entrega final, com foco em escalabilidade e confiabilidade. Implantação de robôs responsáveis por processar grandes volumes de dados em múltiplas execuções diárias, substituindo operações manuais que exigia múltiplas pessoas dedicadas. Atuação em projetos críticos para clientes externos, com foco na redução de custos operacionais e aumento da eficiência por meio da automação de tarefas repetitivas e de alto impacto. </p>"
      },
      
      {
        summary: {
          strong: 'Analista de Automação | RPA Junior',
          p: 'Analista de Automação | RPA Junior na Quality Digital',
        },
        text: "<p>Como Analista de RPA Junior, era responsável pelo desenvolvimento, sustentação e otimização de soluções RPA para clientes externos, com foco na automação de processos críticos, aumento da eficiência, redução de erros manuais e execução de tarefas de alto volume. Também participo ativamente na análise de processos, propondo melhorias e soluções que aumentam a eficiência operacional e reduzem custos.</p>"
      },
      
      {
        summary: {
          strong: 'Assistente de automação | RPA',
          p: 'Assistente de Automação | RPA na Quality Digital',
        },
        text: "<p>Como Assistente de RPA, atuava no desenvolvimento de projetos que automatizam processos de rotina. Isto envolve experiências como: Consumo de APIs, Utilização e administração de bancos de dados SQL, utilização de Linguagens de programação como: JavaScript, PowerShell Script, Python, Java, VBscript, entre outras linguagens. Está experiência foi enriquecedora, já que, além de uma grande quantidade de tecnologias, tenho aprendido padrões de Software e processos administrativos, pois os automatizo, acelero e faço com que a mão humana seja reduzida. Garantindo assim, mais assertividade.</p>"
      },

      {
        summary: {
          strong: 'Aprendiz de TI',
          p: 'Atuei como Aprendiz de TI na Milano brasil.',
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
