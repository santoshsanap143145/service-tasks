import { Injectable } from '@angular/core';
import { Istd } from '../models/student';
import { UuidService } from './uuid.service';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jhonD@example.com',
      contact: 7858658978,
      isActive: true,
      stdId: this._uuidService.uuid(),
    },
    {
      fname: 'Alice',
      lname: 'Smith',
      email: 'aliceS@example.com',
      contact: 9876543210,
      isActive: false,
      stdId: this._uuidService.uuid(),
    },
    {
      fname: 'Charlie',
      lname: 'Brown',
      email: 'charlieB@example.com',
      contact: 7654321098,
      isActive: true,
      stdId: this._uuidService.uuid(),
    },
    {
      fname: 'Emma',
      lname: 'Williams',
      email: 'emmaW@example.com',
      contact: 6543210987,
      isActive: false,
      stdId: this._uuidService.uuid(),
    },
  ];

  constructor(private _uuidService: UuidService, private _snackbar: SnackBarService) {}

  fetchAllStds(): Array<Istd> {
    return this.stdArr;
  }

  createNewStd(newStd: Istd) {
    this.stdArr.unshift(newStd);
    this._snackbar.notify(`New Student ${newStd.fname} ${newStd.lname} is added successfully !!!`)
  }

  patchTodo(id: string): Istd{
    return this.stdArr.find(std => std.stdId === id)!
  }

  updateStd(updatedStd: Istd){
    let getIndex = this.stdArr.findIndex(std => std.stdId === updatedStd.stdId)
    this.stdArr[getIndex] = updatedStd
    this._snackbar.notify(`The Student is updated to ${updatedStd.fname} ${updatedStd.lname} successfully !!!`)
  }

  removeStd(id: string){
    let getIndex = this.stdArr.findIndex(std => std.stdId === id)
    let removeStd = `${this.stdArr[getIndex].fname} ${this.stdArr[getIndex].lname}`
    this.stdArr.splice(getIndex, 1)
    this._snackbar.notify(`The Student ${removeStd} is removed successfully !!!`)
  }
}
