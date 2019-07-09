import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeService';

@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent implements OnInit{
      empId:number;
      empName:string;
      empSalary:number;
      empDept:string;
      constructor(private service:EmployeeService){
          
      }
      @Input()
      emparr:any[];
      ngOnInit(){
          this.service.getAllEmployee().subscribe((data:any)=>this.emparr=data);

      }
      deleteEmployee(data:number){
          this.emparr.splice(data,1);
      }
      status:boolean=false;
      change(){
          this.status=true;
          this.addEmp();
      }
    addEmp() {
       this.emparr.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDept:this.empDept})
    }
   
}