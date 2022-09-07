function getHistory (){
	return document.getElementById("history_value").innerText;
}
function printHistory(num){
	document.getElementById("history_value").innerText=num;
}

function getOutput (){
	return document.getElementById("output_value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output_value").innerText=num;
	}
	else{
		document.getElementById("output_value").innerText=getFormattedNumber(num);
	}
}

function getFormattedNumber(num){
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}
printOutput("9565895");
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));

}


let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++){
	operator[i].addEventListener('click', function(){
		alert("The operator clicked: "+this.id);
	})
}

let number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++){
	number[i].addEventListener('click', function(){
		alert("The operator clicked: "+this.id);
	})
}