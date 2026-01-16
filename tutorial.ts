// readonly
interface Employee{
    readonly employeeId: number;
    startDate: Date;
    name: string;

}
const employee: Employee ={
    employeeId:1,
    startDate:new Date(),
    name: "Ram",

}
employee.name = "new name";
console.log(employee.name);//new name
employee.employeeId = 44; //can't do it

