import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  obj1 = {
    firstName: 'Denis',
    status: 'offline',
    lastName: 'Lubchenko',
    age: 31,
    fullTime: true,
    skills: ['C#', 'php', ['html', 'css', 'js']],
    // currentJob: 'Provectus'
  };

  obj2 = {
    firstName: 'Denis',
    lastName: 'Lubchenko',
    age: 31,
    fullTime: true,
    status: 'online',
    skills: ['C#', 'php', ['html', 'css', 'js']],
  };

  constructor() { }

  ngOnInit() {
    console.log('Compare: ', this.compareObjects(this.obj1, this.obj2));
  }

  compareObjects(obj1, obj2): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    for (const property in obj1) {
      if (obj1.hasOwnProperty(property)) {
        if (!obj2[property]) {
          return false;
        }

        if (obj1[property] !== obj2[property]) {
          return false;
        }
      }
    }

    return true;
  }
}
