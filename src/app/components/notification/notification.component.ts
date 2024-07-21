import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  form: FormGroup;
  submitted = false;
  ram:any;
  unreadCount: number = 0;

  constructor(private formBuilder: FormBuilder,private servicee:ServiceService) {
    this.form = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      
    });
  }

  ngOnInit(): void {
    this.servicee.fetchNotifications();
    this.servicee.getUnreadCount().subscribe((count) => {
      this.unreadCount = count;
      console.log(this.unreadCount,'un')
    });
   
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.servicee.notificatin(this.form.value).subscribe(res=>{
        console.log(res)
        alert('ssss')
      },err=>{
        console.log(err)
        alert('went')
      })
    }

   
  }

  
}
