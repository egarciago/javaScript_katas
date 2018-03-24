
function Person (firstName, lastName, age, hairColor, height){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.hairColor = hairColor;
	this.height = height;
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	}
}
