import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice';

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent {

empall:any[]=[];
}