class Employee
{
    constructor()
    {
     this.id=101;
     this.ename="Ajay"
    }
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();