import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  editId : string | null = null
  constructor() { }

  ngOnInit(): void {
  }

  stdIdtransfer(id: string){
    this.editId = id
  }

  resetEditId(){
    this.editId = null
  }

}
