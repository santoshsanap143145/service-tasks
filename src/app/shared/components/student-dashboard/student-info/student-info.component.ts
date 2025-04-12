import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  stdArr : Array<Istd> = []

  @Output() emitStdId : EventEmitter<string> = new EventEmitter<string>()
  constructor(private _stdService: StudentService) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStds().reverse()
  }

  editOnClick(stdId: string){
    this.emitStdId.emit(stdId)
  }

  removeOnClick(stdId: string){
    let confirmed = window.confirm(`Are you sure, you want to delete this Student?`)
    if(confirmed){
      this._stdService.removeStd(stdId)
    }
  }

}
