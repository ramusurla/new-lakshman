import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!:FormGroup

  submitted = false;
 

  constructor(private formBuilder: FormBuilder, private loginservice:LoginService,private routr:Router) {
    this.form = this.formBuilder.group({
      phone: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
     
    });

 
  }

  ngOnInit(): void {

      }

      get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }
     
    
      onSubmit(): void {
        this.submitted = true;
    
        if (this.form.valid) {
          this.loginservice.postlogin(this.form.value).subscribe(res=>{
            console.log(res,'login res')
            const myres:any=res;
            localStorage.setItem('email',res.email)
            localStorage.setItem('password',res.password)
            console.log(myres,'loginnnnnnnn')
            alert('data added')
            this.routr.navigate
          },err=>{
            alert('wrong')
          })
        }
      
      }
     

    
}
