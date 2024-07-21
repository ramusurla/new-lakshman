import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-multi-array',
  templateUrl: './multi-array.component.html',
  styleUrls: ['./multi-array.component.scss']
})
export class MultiArrayComponent {
  showhide: boolean = false;

skillsForm: FormGroup;

constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
        skills: this.fb.array([]),
    });
}

get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray;
}



newSkill(): FormGroup {
    return this.fb.group({
        skill: '',
        exp: '',
        addressone: '',
        addresstwo: '',
        addressOption: 'no'  // Set a default value
    });
}

addSkills() {
    this.skills.push(this.newSkill());
}

removeSkill(i: number) {
    this.skills.removeAt(i);
}

onSubmit() {
  alert(JSON.stringify(this.skills.value))
    console.log(this.skillsForm.value);
}

add() {
    this.addSkills();
}


}
