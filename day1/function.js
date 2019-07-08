/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children, 
partner's name, geographic location, job title.
outputs your fortune to the screen like so: 
"You will be a X in Y, and married to Z with N kids."
*/

function tellFortune(X, Y, Z, N) {
  return console.log("You will be a " + X + " in " + Y + " , and married to " + Z + " with " + N + " kids.")
}

tellFortune("software Engineer", "newyork", "ahmad", 2)

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
*/

function calculateDogAge (Z) {

  return console.log("Your doggie is " + Z*7 + " years old in dog years!")
}

calculateDogAge (2)

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
*/
function calculateSupply (age , day){
var maxAge = 70;
  var z = maxAge-age;
var w = day*z*365;
return ("You will need "+ w +" to last you until the ripe old age of "+ maxAge)
}
console.log(calculateSupply (27 , 2000))
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
*/
function greet(name){
return ("hello "+ name)}

console.log (greet("Ahmad"))

/*
5
what is the error:
// */
function double(x) {
  return 2 * x;
}

function double1(z) {
  return 2 * z;
}

function double2(x) {
  return 2 * x;
}


/*
6
fix these functions */

function double1(x) {
return 2 * x ;
 } 

function double2 (x) {
return 2 * x; 
}

function  double3(x) {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of it
*/

function cube (x)
{
  var z=x*x*x;
  return z;
}

console.log(cube(5))

/*



*/

/*



*/

/*



*/

/*



*/