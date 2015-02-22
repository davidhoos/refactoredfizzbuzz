fizzBuzzApp(inputNumber = prompt("Please enter a number"));

function fizzBuzzApp(){

for (var countUp = 1; countUp < inputNumber; countUp++) {

	//Is the number divisible by three?
	if (countUp % 3 == 0) {

		//Also, is it divisible by five?
		if (countUp % 5 == 0) {

			//If so, then print fizzbuzz.
			console.log("fizzbuzz");
	//If its divisitble by three but not by five, print fizz.
	} else 
			console.log("fizz");
	
	//Is it divisible by five?
	} else if (countUp % 5 == 0) {
			console.log("buzz");
	} else {
			console.log(countUp);
	}
}

}