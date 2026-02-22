import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';

// @Component({
  //selector: 'app-root',
  //template: ` Hello `,
  //styles: `
    //:host {
      //color: blue;
    //}
  //`,
//})
//export class App {}

/*@Component({
  selector: 'app-user',
  template: `Username: {{username}}`,
})
export class User {
  username = `youngTeach`;
}
@Component({
  selector: 'app-root',
  template: `<app-user />`, 
  imports: [User], 
})
export class App{}
*/

/*@Component({
  selector: 'app-root',
  template: `
  @if (isLoggedIn){
  <p>Welcome back, Friend</p>
  }
  `
})
export class App{
  isLoggedIn = true;
}
*/

/*@Component({
  selector: 'app-root',
  template: `
  @for (os of operatingSystems; track os.id){
  {{os.name}}
  }
  `
})
export class App{
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  
}
*/

/*@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: `<div contentEditable="false"></div>`,
})
export class App{}
*/

/*@Component({
  selector: 'app-root',
  template: `
  <section>
  There's a secret message for you, hover to reveal 👀

  {{message}}
  </section>
  `,
})
export class App{
  message = ''; 

  showSecretMessage() {
  this.message = 'Way to go 🚀';
  }
}
*/

/*@Component({
  selector: 'app-child',
  styles: `
  .btn {
  padding: 5px;
  }
  `,
  template: `<button class="btn" (click)="addItem()"> Add Item </button> `,
})
class Child {
  incrementCountEvent = output<number>();
}
export class Child{
  addItem(){}
}
*/

/*
import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article></article>
      <comments />
    </div>
  `,
  imports: [Comments],
})
export class App {}

*/

/*@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],  
  template: `
    <p>Username: {{username}}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/logo.svg" alt="Angular logo" width="32" height="32">
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" width="32" height="32">
      </li>
    </ul>
  `,
})
export class App {
  logoUrl = '/logo.svg'; 
  logoAlt = 'Angular logo';  
  username = 'youngTeach';
}
*/

/*@Component({
selector: 'app-root',
template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
imports: [RouterOutlet],
})
export class App {}
*/
 
/*@Component({
  selector: 'app-root',
  template: `
  <nav>
  <a href="/"> Home </a>
  |
  <a href="/user">User</a>
  </nav>
  <router-outlet/>
  `,
  imports: [RouterOutlet],
})
export class App{}
*/

/*@Component({
  selector: 'app-root',
  template: `
  <p>Username: {{username}} </p>
  <p>{{username}}'s favorite framework: {{favoriteFramework}} </p>
  <lebel for="framework"> Favorite Framework: 
  <input id = "framework" type="text" [(ngModel)]="favoriteFramework"/> 
  </label>
  `,
  imports: [FormsModule],
})
export class App {
  username = 'youngTech';
  favoriteFramework = '';
}
*/


/*@Component({
  selector: 'app-user',
  imports: [FormsModule],
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework:</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `
})
export class App {
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    
    alert(this.favoriteFramework);
  }
}
*/

/*
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}
*/


/*
import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class App {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
*/

/*
import {Injectable} from '@angular/core';

export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

*/

/*
 
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p>Car Listing: {{ display }}</p>`,  
})
export class App {
  
  carService = inject(CarService);
  

  display = this.carService.getCars().join(' ');
}
*/

/*
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LowerCasePipe],  // Пайп в imports
  templateUrl: './app.component.html'
})
export class App {
  username = 'YOUR_USERNAME';
}
*/


/*
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" {{ num }}</li>
      <li>Date with "date" {{ birthday }}</li>
      <li>Currency with "currency" {{ cost }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
*/

import { ReversePipe } from './reverse.pipe';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReversePipe], 
  template: `Reverse Machine: {{ word | reverse }}`  
})
export class App {
  word = 'You are a champion';
}