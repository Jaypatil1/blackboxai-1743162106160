import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  title = 'My Projects';
  activeCategory = 'All';
  categories = ['All', 'Web', 'Mobile', 'Angular'];
  
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart and payment integration',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      category: 'Web',
      image: 'assets/project1.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Productivity application for organizing daily tasks',
      tags: ['Angular', 'Firebase'],
      category: 'Web',
      image: 'assets/project2.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast',
      tags: ['Angular', 'API'],
      category: 'Web',
      image: 'assets/project3.jpg',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  get filteredProjects() {
    if (this.activeCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeCategory);
  }

  filterProjects(category: string) {
    this.activeCategory = category;
  }
}