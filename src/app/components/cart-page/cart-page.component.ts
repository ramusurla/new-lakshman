import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  showproduct:any

  constructor(private service:ServiceService){}

  ngOnInit(){
    this.service.products().subscribe((res:any)=>{
      this.showproduct=res;
      console.log(this.showproduct,'cart image')
    })

  
    
  }

  


  deleteimage(data:any){
    this.service.removeitms(data)
  }

  incerement(data:any){
    this.showproduct=this.showproduct.map((a:any)=>{
      if(data.id === a.id){
        return {
          ...data,
          qty:data.qty+1
        }
        
      }
      return data;

    })
  }

  decrement(data:any){
    this.showproduct=this.showproduct.map((a:any)=>{
      if(data.id === a.id){
        return {
          ...data,
          qty:data.qty-1 > 0 ? data.qty-1:1
        }
        
      }
      return data;

    })
  }

  public calcguradtotal():number{
    let total:number=0
    for(let data of this.showproduct){
      total +=(data.qty* data.price)

    }
    return total
  }



}
