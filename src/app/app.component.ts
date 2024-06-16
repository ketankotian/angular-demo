import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PasswordGenerator';
  name:string='Satoru Gojo';
  age:number=27;

  userInput(value:string){
    this.name=value;
  }
}
