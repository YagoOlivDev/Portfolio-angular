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
        name: 'Java',
        descricao: 'Uma linguagem poderosa e versátil que utilizo para criar desde APIs robustas até sistemas completos. Gosto dela pela segurança e por ser muito utilizada em grandes projetos.'
      },

      {
        src: 'assets/icons/spring.svg',
        alt: 'conhecimentos de Spring',
        name: 'Spring',
        descricao: 'Esse é o meu parceiro no back-end. Ele facilita a criação de APIs REST, gerencia as dependências e me ajuda a seguir boas práticas como MVC. Ideal para manter o código limpo e organizado.'
      },

      {
        src: 'assets/icons/csharp.svg',
        alt: 'conhecimentos de C#',
        name: 'Csharp',
        descricao: 'Uma linguagem moderna que eu uso principalmente em projetos .NET. Ela é clara e eficiente, perfeita tanto para aplicações web quanto desktop.'
      },

      {
        src: 'assets/icons/Dotnet.png',
        alt: 'conhecimentos de Dotnet',
        name: '.NET',
        descricao: 'A plataforma da Microsoft que me permite desenvolver sistemas e APIs com facilidade. O ecossistema é excelente e faz com que as aplicações rodem de forma rápida e estável.'
      },

      {
        src: 'assets/icons/mysql.svg',
        alt: 'conhecimentos de Banco de dados',
        name: 'MySQL',
        descricao: 'Banco de dados relacional que utilizo para armazenar e consultar dados com SQL. Ele é confiável e tem uma comunidade ativa, o que facilita resolver qualquer dúvida.'
      },

      {
        src: 'assets/icons/html.svg',
        alt: 'conhecimentos de html',
        name: 'Html5',
        descricao: 'A estrutura de qualquer página web. Com HTML, monto a base do conteúdo e organizo os elementos que depois são estilizados e animados.'
      },

      {
        src: 'assets/icons/css.svg',
        alt: 'conhecimentos de Css',
        name: 'Css3',
        descricao: 'Aqui entra a parte visual! Com CSS, dou vida às páginas, ajusto cores, posiciono elementos e deixo tudo com uma cara bonita e moderna.'
      },

      {
        src: 'assets/icons/typescript.svg',
        alt: 'conhecimentos de typescript',
        name: 'TypeScript',
        descricao: 'Uma versão melhorada do JavaScript, que uso para criar código mais seguro e escalável. A tipagem forte evita vários erros e melhora muito a manutenção dos projetos.'
      },

      {
        src: 'assets/icons/angular.svg',
        alt: 'conhecimentos de Angular',
        name: 'Angular',
        descricao: 'Um dos meus frameworks favoritos para o front-end. Ele me ajuda a criar interfaces dinâmicas e interativas, e gosto da estrutura organizada que ele proporciona.'
      },

      {
        src: 'assets/icons/docker.svg',
        alt: 'conhecimentos de Docker',
        name: 'Docker',
        descricao: 'Ferramenta essencial no desenvolvimento moderno. Uso para empacotar aplicações em containers, o que garante que o código funcione da mesma forma em qualquer ambiente.'
      },
    ]
  )
}
