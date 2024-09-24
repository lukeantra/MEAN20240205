import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Forms';
}

class Person {
  constructor() {}

  print() {
    console.log(this);
  }
}

const obj = {
  hello: () => {
    console.log(this);
  },
};

const hello = () => {
  console.log(this);
};
