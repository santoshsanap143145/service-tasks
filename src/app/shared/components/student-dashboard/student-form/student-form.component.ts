import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm!: NgForm;

  @Input() editId!: string | null;
  editMode: boolean = false
  editStdObj !: Istd

  @Output() resetEditId = new EventEmitter<void>();
  constructor(
    private _uuidService: UuidService,
    private _stdService: StudentService
  ) {}

  ngOnInit(): void {}

  submitOnclick() {
    if (this.stdForm.valid) {
      let newStd: Istd = this.stdForm.value;
      newStd.stdId = this._uuidService.uuid()
      newStd.isActive = this.stdForm.value.isActive === 'yes';
      this._stdService.createNewStd(newStd);
      this.stdForm.resetForm()
      this.resetEditId.emit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editId']){
      setTimeout(() => {
        if(this.stdForm && this.editId){
          this.editStdObj = this._stdService.patchTodo(this.editId)
          this.stdForm.setValue({
            fname: this.editStdObj.fname,
            lname: this.editStdObj.lname,
            email: this.editStdObj.email,
            contact: this.editStdObj.contact,
            isActive: this.editStdObj.isActive ? 'Yes' : 'No'
          })
          this.editMode = true
        }
      }, 50);
    }
  }

  updateOnClick(){
    let updatedStd: Istd = this.stdForm.value;
    updatedStd.stdId = this.editStdObj.stdId
    updatedStd.isActive = this.stdForm.value.isActive === 'yes';
    this.stdForm.resetForm()
    this._stdService.updateStd(updatedStd)
    this.editMode = false;
    this.resetEditId.emit();
  }
}
