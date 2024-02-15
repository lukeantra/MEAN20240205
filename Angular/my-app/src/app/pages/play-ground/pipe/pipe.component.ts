import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  title: string = 'Angular Custom Pipe Example';
  celcius: string = '';
  Fahrenheit: string = '';

  c = 50;

  obj = {
    name: 'Jojo',
    age: 27,
    salary: 4524,
  };

  originalOrder(
    a: KeyValue<string, string | number>,
    b: KeyValue<string, string | number>
  ) {
    return 0;
  }
}
