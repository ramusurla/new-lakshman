import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  produts:any;

  public age=[1,2,4,5,"nhsi","neie",'eiod']
  
  constructor(private service:ServiceService, private route:Router){}

  ngOnInit(){
    this.getproduts();
const fiternmber=this.age.map((a)=>a)
console.log(fiternmber,'hfhf')
    
  }

  getproduts(){
    this.service.getproducts().subscribe(res=>{
      this.produts=res
      console.log(this.produts,'responc')
    })
  }

  addtocart(data:any){
    this.service.addtocart(data)
  }

  removeitems(data:any){
    this.service.removeitms(data)

  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }


}
