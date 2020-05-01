import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  @ViewChild('formContact') formContact: NgForm;


  constructor() {
  }

  ngOnInit(): void {
  }


  formValues = {
    name: null,
    email: null,
    subject: null,
    message: null,
  }

  // onSubmit = (formContact: NgForm)=>{
  //   console.log('Submitted!');
  //   console.log(formContact)
  // }

  onSubmit = () => {
    this.formValues= {
      name: this.formContact.value.name,
      email: this.formContact.value.email,
      subject: this.formContact.value.subject,
      message: this.formContact.value.message,
    }
    this.formContact.resetForm()
  }


}
