import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.scss']
})
export class ViewproductsComponent {
showadd:boolean=true;
showremove:boolean=false;
  myproducts:any;
  constructor (private service:ServiceService,private activateroute:ActivatedRoute){}
  ngOnInit(){
    let productid=this.activateroute.snapshot.paramMap.get('id')
    // console.log(productid,'myid')
    productid && this.service.getproductsid(productid).subscribe(res=>{
      this.myproducts=res;
      console.log(this.myproducts,'new products')
    })
  }

  addtocart(myproducts:any){
    this.showadd=false;
    this.showremove=true
    this.service.addtocart(myproducts)
  }
  removecart(myproducts:any){
    this.showremove=false;
    this.showadd=true
    this.service.removeitms(myproducts)
  }

}
