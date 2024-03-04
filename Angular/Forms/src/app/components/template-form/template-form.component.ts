import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  @ViewChild('sdiv') selecteddiv: any;

  onSubmit(contectForm: NgForm) {
    console.log(contectForm.valid);
  }
}
