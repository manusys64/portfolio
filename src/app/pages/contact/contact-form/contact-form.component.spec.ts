import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Contact } from '../../../models/contact.model';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [ ReactiveFormsModule, HttpClientModule ],
      declarations: [ ContactFormComponent ]
    }).compileComponents();
      fixture = TestBed.createComponent(ContactFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('form invalid when empty', () => {
  	expect(component.contactForm.valid).toBeFalsy();
	});

  it('email field validity', () => {
    let errors = {};
    let email = component.contactForm.controls['email'];
    errors = email.errors || {};
    expect(email.valid).toBeFalsy();
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form emits a contact data', async(() => {
    spyOn(component.submitted, 'emit');
    component.contactForm.controls['name'].setValue("Adam Smith");
    component.contactForm.controls['email'].setValue("adam@gmail.com");
    component.contactForm.controls['message'].setValue("This is a sample message");
    expect(component.contactForm.valid).toBeTruthy();
    component.onSubmit();
    let data = new Contact("Adam Smith", "adam@gmail.com", "This is a sample message");
    expect(component.submitted.emit).toHaveBeenCalledWith(data);
  }));


});
