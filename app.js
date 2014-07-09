/*Prompt for name*/
var prompt = require ('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt ('What is your last name? ');
var full = first + ' ' + last;
console.log('your full name is', full+'.');

/*Prompt for favorite color*/
var color = prompt ('What is your favorite color? ');
console.log('Your favorite color is', color+ '.' );

/*Prompt for dog's age*/
var age= prompt ("What is your dog's age? ");
age = parseInt(age);
console.log("Your dog's age is", age+'.');
console.log("Your dog's age in human years is", (age * 7)+'.');

/*Prompt for if you can drink*/
var age = prompt ('How old are you? ');
age = parseInt(age);
if (age >= 21) {console.log('You are old enough to drink.')} 
else {console.log('You are not old enough to drink.')}

//*Converting temperatures*//

/*Prompt for temp and C/F*/
var choice = prompt ('Would you like to convert F or C? ');
var temp = prompt ('What temperature do you choose? ');
temp = parseInt(temp);
var Far = 'F';
var a = 5;
var b = 9;
var c = 32;

/*Convert temps*/
var choseFar = (((temp - c) * a) / b);
choseFar = parseInt(choseFar);

var choseCel = (((temp * b) / a) + c);
choseCel = parseInt(choseCel);

/*Deliver results*/
if(choice === Far) {console.log('You chose '+temp+choice+' which is equal to ' + choseFar + 'C.')
} 
else {console.log('You chose '+ temp+choice+' which is equal to ' + choseCel + 'F.')}

//Calculating BMI//

var weight = prompt ('How much do you weigh (in pounds)? ');
weight = parseInt(weight);
var height = prompt ("How tall are you in inches(Hint 6'0 = 72 inches)? ");
height = parseInt (height);

var bmi = ( weight / (height * height)) * 703;


console.log('Your BMI is ' + bmi.toFixed(1) + '.');

if(bmi <= 18){
  console.log('You are underweight.');
}else if(bmi < 25 ){
  console.log('You are healthy.');
}else if(bmi >= 25){
  console.log('You are overweight.');
} 



