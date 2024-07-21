
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  skillsForm: FormGroup;
  submitted = false;
  showSkillsForm = false;
  selectoptionshow=false;
  remainingTime:any;
  timer: any;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      skills: this.fb.array([]),
    });
   
  }

  get f() {
    return this.skillsForm.controls;
  }

  get skills() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }

  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue,'selected vlue')
    const currentSkillsLength = this.skills.length;
    console.log(currentSkillsLength,'current length')

    if (currentSkillsLength < selectedValue) {
      for (let i = currentSkillsLength; i < selectedValue; i++) {
        this.addSkills();
      }
    } else if (currentSkillsLength > selectedValue) {
      for (let i = currentSkillsLength - 1; i >= selectedValue; i--) {
        this.removeSkill(i);
      }
    }
  }

  addSkills() {
    const newSkill = this.fb.group({
      skill: ['', [Validators.required]],
      exp: ['', [Validators.required, Validators.minLength(6)]],
    });
    (this.skillsForm.get('skills') as FormArray).push(newSkill);
  
  }

  removeSkill(index: number) {
    (this.skillsForm.get('skills') as FormArray).removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    if (this.skillsForm.valid) {
      alert(JSON.stringify(this.skillsForm.value));
      this.skillsForm.reset();
      this.submitted = false;
    }
  }



toggleSkillsForm(event:any){
  if(event.target.value === 'yes'){
    this.addSkills();
    this.selectoptionshow=true;
  }else{
    this.selectoptionshow=false;
    const skillsArray = this.skillsForm.get('skills') as FormArray;
            while (skillsArray.length !== 0) {
                skillsArray.removeAt(0);
  }

}


}
myvale:any;
send(){
if(this.myvale == null){
 
}else{
  this.startTimer();
}
}

stop(){
  clearInterval(this.timer);
  this.myvale='';
}



startTimer(): void {
  const duration = 2 * 60; // 2 minutes in seconds
  let seconds = duration;

  this.timer = setInterval(() => {
    const minutes = Math.floor(seconds / 60);
    const secondsDisplay = (seconds % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 });

    this.remainingTime = `${minutes}:${secondsDisplay}`;

    if (seconds <= 0) {
      clearInterval(this.timer);
      
    }

    seconds--;
  }, 1000); // Update every second (1000 milliseconds)
}
stopTimer(): void {
  clearInterval(this.timer);
  
}



}
