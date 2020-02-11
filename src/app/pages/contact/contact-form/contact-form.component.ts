import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  @Output() submitted = new EventEmitter<Contact>();

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form();
  }

  private form() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted.emit (new Contact(
          this.contactForm.value.name,
          this.contactForm.value.email,
          this.contactForm.value.message
      ));
      // alert("Thank you!");
      // this.contactForm.reset();
    }
  }

}
