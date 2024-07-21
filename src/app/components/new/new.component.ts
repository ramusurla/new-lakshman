import { Component, ElementRef, ViewChild } from '@angular/core';
import { NotiService } from 'src/app/noti.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any; // Declare jQuery
import { Directive, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent {
  @Directive({
    selector: '[appMaxLength]'
  })

  @ViewChild('dateofmonthInput', { static: false }) dateofmonthInput: any;
  @ViewChild('dateofyearInput', { static: false }) dateofyearInput: any;

  @Input() appMaxLength:any;
  currentvalue:string=''


  banknames=[
    {
      id:1,
      bankname:"state bank of india"
    },
    {
      id:2,
      bankname:"icici bank"
    },
    {
      id:3,
      bankname:"axis bank"
    },
    {
      id:4,
      bankname:"india"
    }
  ]

 

  form: FormGroup;
  formtwo:FormGroup;
  submitted = false;
  submitted1 = false;
  showtwo:boolean=false;
  showone:boolean=true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
    });
    this.formtwo = this.formBuilder.group({
      dateofday: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      dateofmonth: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      dateofyear: new FormControl('', [Validators.required, Validators.maxLength(4),Validators.pattern(/^\d{4}$/), this.checkyear,]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
      pincode:new FormControl('',[Validators.required,Validators.pattern(/^\d{6}$/)])
    }, { validator: this.checkconfirmpassword });
  }

  get f() {
    return this.form.controls;
  }

  get f1() {
    return this.formtwo.controls;
  }
 
  verify(){
    this.submitted1=true;
    if (this.formtwo.valid) {
      console.log(this.formtwo.value,'all valuers')
      this.showone=false;
      this.showtwo=true;
     
    }
  }

  onInput(event: any, nextInput?: any) {
    

    if (event.target.value.length === event.target.maxLength && nextInput) {
      nextInput.focus();
    }
  }
  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.form.valid) {
      $('#exampleModal').modal('hide');
    }

    // Your form submission logic here
    console.log('Form submitted successfully');
  } 

  clcick(){
    $('#exampleModal').modal('show');
  }


  checkconfirmpassword(formtwo: FormGroup) {
    const password = formtwo.get('password')?.value;
    const confirmpassword = formtwo.get('confirmpassword')?.value;
  
    if (password === confirmpassword) {
      return null;
    } else {
      // Set the 'mismatch' error here
      formtwo.get('confirmpassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }

  checkyear(control: AbstractControl) {
    const myyear = control.value;
    const currentYear = new Date().getFullYear();
  
    if (myyear && (myyear < 1920 || myyear > currentYear)) {
      return { mismatch: true };
    }
  
    return null;
  }
  

  // fourDigitYear(control: AbstractControl) {
  //   const value = control.value;
  
  //   if (value && !/^\d{4}$/.test(value)) {
  //     return { fourDigitYear: true };
  //   }
  
  //   return null;
  // }


  // pinCodeValidator(control:any) {
  //   const value = control.value;
  //   if (/^\d{0,6}$/.test(value)) {
  //     return null;
  //   } else {
  //     return { invalidPin: true }; 
  //   }
  // }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.replace(/\D/g, ''); 
    const maxDigits = 6;
    input.value = inputValue.slice(0, maxDigits); 
  }
}
