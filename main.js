
// debugger

// for (var i = 0; i < 5; i++) {
//   console.log("this is loop" + i);
// }


//for loop
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


//while loops
// var j = 0;
// while (j < 5) {
//   console.log('this loop has run' + j + 'times');
//   j++;
// }

// Do while - the loop will always run the ode once before checking the condition
// var number;
//
// do{
//   number = Math.random();
//   console.log(number);
// }while (number < 0.5) {
//
// }


//for in
// var myobject = new Object();
// myobject.a ="1";
// myobject.b = "2";
// myobject.c = "3";
//
// for(var key in myobject) {
//   console.log(key);
//   // console.log(myobject[key]);
// }

// var number = [1,2,3];

for (var i = 1; i < 101; i++) {
  // console.log(number[i]);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  }
  if (i % 3 === 0)
  {
    console.log('fizz');
  }
  else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
  // if (i % 5 === 0)
  // {
  //   console.log('buzz');
  // }
}
// while (number < 101 % 3) {
//   console.log('fizz');
// }

// else if (true) {
