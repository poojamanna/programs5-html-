class Student  {
	fullName:string;
	constructor(public firstName: string,public middleName:string,public lastName: string) {
		// code...
		this.fullName= firstName+" "+middleName+" "+lastName;
	}
}
interface Person {
	firstName: string;
	lastName: string;
}
function greeter(person:Person) {
	return "Hello, "+person.firstName+" "+person.lastName;
}
let user = new Student("Pooja","Manna","R");
console.log(greeter(user));