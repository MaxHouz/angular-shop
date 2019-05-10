import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { CleanCart } from '../../../../core/store/cart/cart.actions';
import { getCartProducts } from '../../../../core/store/cart/cart.selectors';
import * as RouterActions from '../../../../core/store/router/router.actions';

import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { OrderService } from '../../services/order.service';
import { Product } from '../../../products/models/product.model';
import { Order } from '../../models/order.models';
import { ShippingDetails } from '../../models/shipping-details.models';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  orderForm: FormGroup;
  nameFormGroup: FormGroup;
  contactsFormGroup: FormGroup;
  shippingFormGroup: FormGroup;

  phones: FormArray = new FormArray([
    new FormControl('', [Validators.required])
  ]);
  shippingPhones: FormArray = new FormArray([
    new FormControl('')
  ]);

  requiredErrorMessage = 'This field is required';
  emailErrorMessage: string;

  private sub: Subscription;
  private productsList: Product[];

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.sub = this.store.pipe(select(getCartProducts))
      .subscribe(products => this.productsList = products);
    this.initializeForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addPhone($event: Event): void {
    $event.stopPropagation();
    this.phones.push(
      new FormControl('')
    );
  }

  removePhone($event: Event, index: number): void {
    $event.stopPropagation();
    this.phones.removeAt(index);
  }

  addShippingPhone($event: Event): void {
    $event.stopPropagation();
    this.shippingPhones.push(
      new FormControl('')
    );
  }

  removeShippingPhone($event: Event, index: number): void {
    $event.stopPropagation();
    this.shippingPhones.removeAt(index);
  }

  confirmOrder(): void {
    const shippingForm = this.shippingFormGroup;
    const shippingDetails = shippingForm.get('shipping').value
      ? new ShippingDetails(
        shippingForm.get('city').value,
        shippingForm.get('address').value,
        shippingForm.get('shippingFirstName').value,
        shippingForm.get('shippingLastName').value,
        shippingForm.get('shippingEmail').value,
        shippingForm.get('shippingPhones').value,
      )
      : {};
    const order = new Order(
      this.productsList,
      this.nameFormGroup.get('firstName').value,
      this.nameFormGroup.get('lastName').value,
      this.contactsFormGroup.get('email').value,
      this.contactsFormGroup.get('phones').value,
      shippingDetails
    );
    this.orderService.addOrder(order)
      .then(() => {
        this.store.dispatch(new CleanCart());
        this.store.dispatch(new RouterActions.Go({
          path: ['/']
        }));
      });
  }

  setShippingDetails(): void {
    while (this.shippingPhones.length !== 0) {
      this.shippingPhones.removeAt(0);
    }
    if (!this.shippingFormGroup.get('sameAsOrderDetails').value) {
      this.shippingFormGroup.patchValue({
        shippingFirstName: this.nameFormGroup.get('firstName').value,
        shippingLastName: this.nameFormGroup.get('lastName').value,
        shippingEmail: this.contactsFormGroup.get('email').value
      });
      this.phones.controls.forEach( control => this.shippingPhones.push(control));
    } else {
      this.shippingFormGroup.patchValue({
        shippingFirstName: null,
        shippingLastName: null,
        shippingEmail: null
      });
      this.shippingPhones.push(new FormControl('', [Validators.required]));
    }
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
      phones: this.phones
    });

    this.shippingFormGroup = new FormGroup({
      shipping: new FormControl(false),
      city: new FormControl('Kyiv'),
      address: new FormControl(),
      sameAsOrderDetails: new FormControl(false),
      shippingFirstName: new FormControl(),
      shippingLastName: new FormControl(),
      shippingEmail: new FormControl(),
      shippingPhones: this.shippingPhones
    });

    this.orderForm = new FormGroup({
      name: this.nameFormGroup,
      contacts: this.contactsFormGroup,
      shipping: this.shippingFormGroup
    });
  }

  private watchValueChanges(): void {
    const shippingSub = this.shippingFormGroup.get('shipping').valueChanges
      .subscribe(value => this.enableShipping(value));
    this.sub.add(shippingSub);

    const emailControl = this.contactsFormGroup.get('email');
    const shippingEmailControl = this.shippingFormGroup.get('shippingEmail');

    const emailSub = emailControl.valueChanges
      .subscribe(value => this.setEmailErrorMessage(emailControl));
    this.sub.add(emailSub);

    const shippingEmailSub = shippingEmailControl.valueChanges
      .subscribe(value => this.setEmailErrorMessage(shippingEmailControl));

    this.sub.add(shippingEmailSub);
  }

  private enableShipping(value: boolean): void {
    if (value) {
      this.shippingFormGroup.get('city').setValidators([Validators.required]);
      this.shippingFormGroup.get('address').setValidators([Validators.required]);
      this.shippingFormGroup.get('shippingFirstName').setValidators([Validators.required]);
      this.shippingFormGroup.get('shippingLastName').setValidators([Validators.required]);
      this.shippingFormGroup.get('shippingEmail').setValidators([
        Validators.required,
        Validators.email
      ]);
      console.log(this.shippingFormGroup.get('shippingPhones'));
      (<FormArray>this.shippingFormGroup.get('shippingPhones')).controls[0].setValidators([Validators.required]);
      this.updateValidityForShippingForm();
    } else {
      this.shippingFormGroup.get('city').clearValidators();
      this.shippingFormGroup.get('address').clearValidators();
      this.shippingFormGroup.get('shippingFirstName').clearValidators();
      this.shippingFormGroup.get('shippingLastName').clearValidators();
      this.shippingFormGroup.get('shippingEmail').clearValidators();
      (<FormArray>this.shippingFormGroup.get('shippingPhones')).controls[0].clearValidators();
      this.updateValidityForShippingForm();
    }
  }

  private updateValidityForShippingForm(): void {
    this.shippingFormGroup.get('address').updateValueAndValidity();
    this.shippingFormGroup.get('city').updateValueAndValidity();
    this.shippingFormGroup.get('shippingFirstName').updateValueAndValidity();
    this.shippingFormGroup.get('shippingLastName').updateValueAndValidity();
    this.shippingFormGroup.get('shippingEmail').updateValueAndValidity();
    this.shippingFormGroup.get('shippingPhones').updateValueAndValidity();
  }

  private setEmailErrorMessage(control: AbstractControl): void {
    if (control.errors) {
      if (control.errors.email) {
        this.emailErrorMessage = 'Please, enter valid e-mail address';
      } else {
        this.emailErrorMessage = this.requiredErrorMessage;
      }
    } else {
      this.emailErrorMessage = '';
    }
  }
}
