import { Component } from '@angular/core';

interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  isSvg?: boolean;
}
@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  technologies: TechItem[] = [
    // Frontend
    { name: 'Angular', icon: 'devicon-angularjs-plain', category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'frontend' },
    { name: 'RxJS', icon: 'devicon-rxjs-plain', category: 'frontend' },
    { name: 'Redux', icon: 'devicon-redux-original', category: 'frontend' },
    { name: 'HTML5', icon: 'devicon-html5-plain', category: 'frontend' },
    { name: 'CSS3', icon: 'devicon-css3-plain', category: 'frontend' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', category: 'frontend' },
    { name: 'Jasmine', icon: 'devicon-jasmine-plain', category: 'frontend' },
    // Backend
    { name: 'Java', icon: 'devicon-java-plain', category: 'backend' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain', category: 'backend' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', category: 'backend' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'backend' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', category: 'backend' },
    // Tools
    { name: 'Git', icon: 'devicon-git-plain', category: 'tools' },
    { name: 'Azure DevOps', icon: 'devicon-azure-plain', category: 'tools' },
    { name: 'Docker', icon: 'devicon-docker-plain', category: 'tools' },
    { name: 'Postman', icon: 'devicon-postman-plain', category: 'tools' },
    { name: 'GitHub Copilot', icon: 'devicon-github-original', category: 'tools' },
  ];

  get frontendTech() {
    return this.technologies.filter(tech => tech.category === 'frontend');
  }

  get backendTech() {
    return this.technologies.filter(tech => tech.category === 'backend');
  }

  get toolsTech() {
    return this.technologies.filter(tech => tech.category === 'tools');
  }
}
