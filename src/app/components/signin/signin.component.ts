import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  form!:FormGroup
  ram:any
  submitted = false;
  user:any
  token:any;
  constructor(private formBuilder: FormBuilder, private loginservice:LoginService, private route:Router) {
    this.form = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
     
    });

    this.ram

   
  }

  ngOnInit(): void {
    

      }

      get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }
     
    
      onSubmitt(): void {
        this.submitted = true;
        
        if(this.form.valid){
          this.loginservice.getlogin().subscribe(res=>{
            console.log(res,'mainres')
            const user = res.find((a:any)=>{
              return a.email === this.form.value.email && a.password === this.form.value.password
            })

            if(user){
              alert('sucessfully')
              this.route.navigate(['/'])
              

            }
            else{
              alert('wrong credintials')
            }
            const token:any=user
            localStorage.setItem('email',token.email)
            localStorage.setItem('password',token.password)
            console.log(token,'mytoken')
            console.log(user,'userdata')

            
            
          },err=>{
            alert('somethi9ng went wrong')
            console.log(err,)
          })
        }
      }
      



}
