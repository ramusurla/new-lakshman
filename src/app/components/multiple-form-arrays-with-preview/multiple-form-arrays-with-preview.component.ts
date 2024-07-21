import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-multiple-form-arrays-with-preview',
  templateUrl: './multiple-form-arrays-with-preview.component.html',
  styleUrls: ['./multiple-form-arrays-with-preview.component.scss']
})
export class MultipleFormArraysWithPreviewComponent {



  skillsForm: FormGroup;
  uploadForm: any;
  imageURL:any;
  frontImage:any;
  backImage:any;
  DrivingImage:any;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      myselect:'',
      passport: this.fb.array([]) ,
      aadhar: this.fb.array([]) ,
      voterid:this.fb.array([]),
      drivingLicence:this.fb.array([]),
    });
  
  }
 
  get passport() : FormArray {
    return this.skillsForm.get("passport") as FormArray
  }
  get aadhar() : FormArray {
    return this.skillsForm.get("aadhar") as FormArray
  }
  get voterid() : FormArray {
    return this.skillsForm.get("voterid") as FormArray
  }
  get drivingLicence() : FormArray {
    return this.skillsForm.get("drivingLicence") as FormArray
  }
 
  newPassport(): FormGroup {
    return this.fb.group({
      file: '',
    
    })
  }
  newAadhar(): FormGroup {
    return this.fb.group({
      frontimage: '',
      backimge:''
    
    })
  }
  newVoterid(): FormGroup {
    return this.fb.group({
      frontimage: '',
      backimge:''
    
    })
  }
  newDrivingLicence(): FormGroup {
    return this.fb.group({
      file: '',
      
    
    })
  }
 
  addPassport() {
    this.passport.push(this.newPassport());
  }
  addAdhar() {
    this.aadhar.push(this.newAadhar());
  }
  addVoterid() {
    this.voterid.push(this.newVoterid());
  }
  addDrivingLicence() {
    this.drivingLicence.push(this.newDrivingLicence());
  }


  removePassport(i:number) {
    this.passport.removeAt(i);
  }
  removeAdhar(i:number) {
    this.aadhar.removeAt(i);
  }
  removeVoterid(i:number) {
    this.voterid.removeAt(i);
  }
  removeDrivingLicence(i:number) {
    this.drivingLicence.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }

  myselectedValue(event:any){
    if(event.target.value === "passport"){
      this.addPassport();
      this.aadhar.clear();
      this.drivingLicence.clear();
      this.voterid.clear();
      this.DrivingImage='';
    }else if(event.target.value === "aadhar"){
      this.addAdhar();
      this.passport.clear();
      this.drivingLicence.clear();
      this.voterid.clear();
    }else if(event.target.value === "voterid"){
      this.addVoterid();
      this.passport.clear();
      this.drivingLicence.clear();
      this.aadhar.clear();
    }else{
      this.addDrivingLicence();
      this.passport.clear();
      this.voterid.clear();
      this.aadhar.clear();
      this.imageURL='';
    }

  }

  showPreview(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
 

  frontimage(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.frontImage = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  backimage(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.backImage = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  driving(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.DrivingImage = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  
}
