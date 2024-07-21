import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public cartitems:number=0
  ram:any;
  mycount:number=0;
  notifications: string[] = [];
  constructor (private api:ServiceService){
    
  }

 ngOnInit(){
  this.notifications = this.api.getNotifications();
  console.log(this.notifications,'noti')

  this.api.products().subscribe(res=>{
    this.cartitems=res.length
  })
  this.getdata()
 
 }

 getdata(){
  this.api.notificationget().subscribe(res=>{
    this.ram=res.length;
    console.log(this.ram)

   
  })

  if(this.ram>0){
    this.mycount-1
  }else{
    this.mycount++
  }
 }
 myci(){
  this.mycount++
 }

}
