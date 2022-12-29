import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: UntypedFormGroup;
  options: string[] = [];

  constructor() {
    this.contactForm = new UntypedFormGroup({
      firstName: new UntypedFormControl("", [Validators.required]),
      lastName: new UntypedFormControl("",[Validators.required]),
      email: new UntypedFormControl("", [Validators.required, Validators.email]),
      message: new UntypedFormControl("", [Validators.minLength(16)])
    });

    this.contactForm.get('email')?.valueChanges.subscribe((value: string) => {
        if (value.includes('@')) {
          this.options = [`${value}yahoo.com`,`${value}yahoo.it`,`${value}yahoo.org`, `${value}gmail.it`, `${value}gmail.org`, `${value}gmail.us`, `${value}gmail.com`, `${value}outlook.it`, `${value}outlook.org`, `${value}outlook.us`, `${value}outlook.com`, `${value}hotmail.it`, `${value}hotmail.org`, `${value}hotmail.us`, `${value}hotmail.com`];

        } else {
          this.options = [`${value}@yahoo.com`,`${value}@yahoo.it`,`${value}@yahoo.org`, `${value}@gmail.it`, `${value}@gmail.org`, `${value}@gmail.us`, `${value}@gmail.com`, `${value}@outlook.it`, `${value}@outlook.org`, `${value}@outlook.us`, `${value}@outlook.com`, `${value}@hotmail.it`, `${value}@hotmail.org`, `${value}@hotmail.us`, `${value}@hotmail.com`];

        }
      })
   }
   

   get firstName() {
    return this.contactForm.get('firstName')
   }

   get lastName() {
    return this.contactForm.get('lastName')
   }
   
   get message() {
    return this.contactForm.get('message')
   }
  ngOnInit(): void {

  }

}
