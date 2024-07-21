import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent {
  @Input() searchtext:string='';
  @Input() branchtext:string='';
  @Input() ifsctext:string=''

  form!:FormGroup;

  banknames=[
    {
      id:1,
      bankname:"state bank of india",
      branch:'kakinda',
      ifsc:'STATE123'
    },
    {
      id:2,
      bankname:"icici bank",
      branch:'pithapuram',
      ifsc:'ICICI123'
    },
    {
      id:3,
      bankname:"axis bank",
      branch:'hyderabad',
      ifsc:'AXIS123'
    },
    {
      id:4,
      bankname:"india",
      branch:'madhapur',
      ifsc:'IND123'
    }
  ]
  newdata:any;
  selectedBank:any;
  show:boolean=true;
  bracnhshow:boolean=true;
  showifsc:boolean=true;
  myselecedvalue: any;
  

  

 
constructor(){
  this.newdata=this.banknames
}



// ngOnChanges(changes: SimpleChanges): void {
//   if (changes['searchtext'] && changes['searchtext'].currentValue) {
//     this.show = true;
//   } else {
//     this.show = false;
//   }
// }

onKeyDown(event: any) {
  this.show = true;
 
}
branchkey(event:any){
  this.bracnhshow=true;
}
ifsckey(event:any){
  this.showifsc=true;
}

onSelectBank(bankName: string): void {
  this.selectedBank = bankName;
  this.searchtext = bankName;
  this.show=false
}

selecedvale(that:any){
this.myselecedvalue=that;
}
sendbrandch(branch:any){
  this.branchtext=branch.branch;
  this.bracnhshow=false;
  this.ifsctext=branch.ifsc;
  this.showifsc=false;

}
sendifsc(ifsc:any){
  this.branchtext=ifsc.branch;
  this.ifsctext=ifsc.ifsc
  this.showifsc=false;;
  this.bracnhshow=false;

}
}
