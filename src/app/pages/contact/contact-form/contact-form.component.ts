import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent implements OnInit {
  contactForm : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.email]],
      message: ['', [Validators.required,
        Validators.minLength(30),
        Validators.maxLength(3000)]]
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }

}
