console.log('Helo SMIT Class_3');

// Tuples : Tuples are fixed length array and having multiples data types:
 

// Exapmle -1
let data : [number,string,boolean] = [45,'Abid',true];
console.log(data)
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);


// Example -2
let error : [number,string] = [404,"Page not found"];
console.log(error);
console.log(error[0]);
console.log(error[1]);


// Example -3
let color : [string,string] = ['White','Green'];
console.log(color);
console.log(color[0]);
console.log(color[1]);



// Example -4
// replacing tuple valus:
let fruits : [string,string] = ['Grapes','Apple'];
console.log(fruits); // Grapes & Apple;
fruits[1] = 'Banana'; // replaced apple to Banana;
console.log(fruits); // Grapes & Banana



//       ::::::: errors in Tuples ::::::::


// Example -5
// changing order  (error)
// let student : [number, string] = ['Ali',123];  // showing error



 
// adding more data into tupes : errors

// Example -6
// error -1
// let city: [string,string] = ['Karachi','Mirprkhas','Islamabad'];  
// here I can't add more than 2 values because I have defined only 2 strings,
// I have to remove Islamabad from Array to resolve this issue . uncomment line 52.


// Exaple -7
// error-2
//let country : [string,string] = ["Pakistan","India"];
//trying to add more country
//country[2] = 'China' // error , I have have only 0 and 1 index : // uncomment this line to check error


// Example -8
// adding  values by puch() method
let games : [string,string] = ['Cricket','Hockey'];
console.log(games); // cricket & Hockey
games.push('Football'); // addding Football by push method
console.log(games) // now Cricket , Hockey & Football





