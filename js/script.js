function calculateInsurance(country, horsepower, age){
	
	if (country == "austria"){
		var insurance = horsepower * 100 / age + 50;

	} else if (country == "hungary"){
		var insurance = horsepower * 120 / age + 100;

	} else {
		var insurance = horsepower * 150 / (age + 3) + 50;
	}
	return insurance.toFixed(2);
}



document.getElementById("button").addEventListener("click", (event) => {
	event.preventDefault();
	const nameE = document.getElementById("name").value;
	const ageE = parseInt(document.getElementById("age").value);
	const countryE = document.getElementById("country").value;
	const horsepowerE = parseInt(document.getElementById("horsepower").value);

	generateDOM(nameE, ageE, countryE, horsepowerE)

})
const generateDOM = (name, age, country, horsepower) => {

	insurance_value = calculateInsurance(country, horsepower, age)
	console.log(insurance_value)
	const resultE = document.getElementById("result")
	resultE.innerHTML = `${name}, your insurance costs ${insurance_value} €`
	console.log(resultE)

	

}

