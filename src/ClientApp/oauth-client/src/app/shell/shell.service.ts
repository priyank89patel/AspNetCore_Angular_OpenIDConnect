import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { ShellComponent } from './shell.component';

@Injectable({
  providedIn: 'root'
})

//Provides helper methods to create routes
export class ShellService {

  constructor() { }
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }
}
