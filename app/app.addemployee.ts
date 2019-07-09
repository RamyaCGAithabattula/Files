import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{

   empId:number;
   empName:string;
   empSalary:number;
   empId2:number;
   empId3:number;
   empSalary2:number;
   empName2:number;

   empall:any[]=[
    {empId: 1, empName: 'abcd',empSalary:1000},
    {empId: 2, empName: 'ab',empSalary:2000},
    {empId: 3, empName: 'cd',empSalary:3000},
    {empId: 4, empName: 'ad',empSalary:4000},
   ];
   addEmployee():any{

       this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
       console.log("Employee Added...."+this.empId+" "+this.empName+this.empSalary);
   }
   

   deleteEmployee(data:number):any{
       this.empall.splice(data,1);
      
   }
   updateEmployee(data:number):any{
       for(let data of this.empall){
           if(data.empd==this.empId3){
             data.empId=this.empId2;
             data.empName=this.empName2;
             data.empSalary=this.empSalary2;
             alert("Row Updated");
           }
       }
   }
    updateEmployee2(data:number):any{
        this.empId2=this.empall[data].empId;
        this.empName2=this.empall[data].empName;
        this.empSalary2=this.empall[data].empSalary;
    }
}
