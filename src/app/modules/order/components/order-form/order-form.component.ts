import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderForm: FormGroup;
  nameFormGroup: FormGroup;
  contactsFormGroup: FormGroup;
  shippingFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  enableShipping(): void {
  }

  setShippingDetails(): void {
    if (!this.shippingFormGroup.get('sameAsOrderDetails').value) {
      this.shippingFormGroup.patchValue({
        shippingFirstName: this.nameFormGroup.get('firstName').value,
        shippingLastName: this.nameFormGroup.get('lastName').value,
        shippingEmail: this.contactsFormGroup.get('email').value,
        shippingPhones: this.contactsFormGroup.get('email').value
      });
    } else {
      this.shippingFormGroup.patchValue({
        shippingFirstName: null,
        shippingLastName: null,
        shippingEmail: null,
        shippingPhones: null
      });
    }
  }

  confirmOrder(): void {
    console.log(this.orderForm.value);
  }

  private initializeForm(): void {
    this.nameFormGroup = new FormGroup({
      firstName: new FormControl(
        '',
        [Validators.required]),
      lastName: new FormControl(
        '',
        [Validators.required]
        ),
    });

    this.contactsFormGroup = new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email
        ]
      ),
      phones: new FormArray([]),
    });

    this.shippingFormGroup = new FormGroup({
      shipping: new FormControl(false),
      city: new FormControl('Kyiv'),
      address: new FormControl(),
      sameAsOrderDetails: new FormControl(false),
      shippingFirstName: new FormControl(),
      shippingLastName: new FormControl(),
      shippingEmail: new FormControl(),
      shippingPhones: new FormControl()
    });

    this.orderForm = new FormGroup({
      name: this.nameFormGroup,
      contacts: this.contactsFormGroup,
      shipping: this.shippingFormGroup
    });
  }
}
