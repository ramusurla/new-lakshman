import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public cartitems:any=[]
  private notifications: string[] = [];
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public productlist=new BehaviorSubject([])
  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get<any>("http://localhost:5500/products")
  }

  getproductsid(id:any){
    return this.http.get<any>("http://localhost:5500/products/"+id)
  }

  addtocart(data:any){
    this.cartitems.push(data)
    // this.productlist.next(this.cartitems)
    console.log(this.cartitems,'ram cartitems')
  }
 
  products(){
    return this.productlist.asObservable()
    
  }

  removeitms(data:any){
    this.cartitems.map((a:any,index:any)=>{
      if(data.id === a.id){
        this.cartitems.splice(index,3)
      }
    })
    this.productlist.next(this.cartitems)
    console.log(this.cartitems,'remove cart items')
  }

  notificatin(data:any){
   return  this.http.post<any>('http://localhost:6500/notification',data)
  }

  notificationget(){
    return this.http.get<any>('http://localhost:6500/notification')
  }

  fetchNotifications() {
    // Replace 'apiUrl' with the actual API endpoint for fetching notifications.
    return this.http.get<any[]>('http://localhost:6500/notification').subscribe(
      (response) => {
        this.notifications = response;
        this.updateUnreadCount();
       
      },
      (error) => {
        console.error('Error fetching notifications:', error);
      }
    );
  }


  getNotifications() {
    return this.notifications;
  }

  getUnreadCount() {
    return this.unreadCountSubject.asObservable();
  }

  private updateUnreadCount() {
    const unreadCount = this.notifications.length;
    this.unreadCountSubject.next(unreadCount);
  }
  
 
}
