var myPetsArray = [  
	{
	animalType: "Dog", 
	name: ["Pujdo"]
	},
	{
	animalType: "Cat",
	name: ["Maca"]
	},
	{
	animalType: "Bird", 
	name: ["Tweety"]
	},
]

function myPetsFunction(myPets){
	var secondpet = myPetsArray[1].name;
	return secondpet;
}

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
