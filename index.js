//JS EXERCISES
//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
const mySum = () => {
  let x = "John";
  let y = "Doe";
  console.log(x + " <> " + y);
};

//22) Create an object with properties such name, surname, email
const newObject = () => {
  const myObj = {
    name: "Ikemba Chimezie",
    surname: "Nwawom",
    Email: "nwawomikemba@gmail.com",
  };
  return myObj;
};

//23) Delete Email from the previously created object
delete myObj.Email;

//24) Create an array with 10 strings in it
const myArray = [
  "book",
  "school",
  "bag",
  "books",
  "pen",
  "sets",
  "boards",
  "crayon",
  "pencil",
  "lunch box",
];

//25) Print in the console every string in the previous array
console.log(myArray);

//26) Create an array with 100 random numbers in it
const randomArray = [];
for (let i = 0; i < 100; i++) {
  let rand = Math.floor(Math.random() * 99);
  randomArray.push(rand);
}

//27) Wrote a function to get the MAX and the MIN from the previously created array
var maxArrayVal = randomArray.reduce(function (a, b) {
  return Math.max(a, b);
});
var minArrayVal = randomArray.reduce(function (a, b) {
  return Math.min(a, b);
});
console.log(maxArrayVal);
console.log(minArrayVal);

//28) Create an array of arrays, in which every array has 10 random numbers
let arrMain = [];
for (let i = 0; i < 4; i++) {
  let innerArray = [];
  for (let j = 0; j < 10; j++) innerArray.push(Math.floor(Math.random() * 10 +1));
  arrMain.push(innerArray);
}
console.log(arrMain);

//29) Create a function that gets 2 arrays and returns the longest one
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 5, 9, 8, 7, 8, 9, 6, 5];
const compareArrLength = (arrM, arrN) => {
  let x = arrM.length;
  let y = arrN.length;
  if (x > y) {
    return arrM;
  } else {
    return arrN;
  }
};
console.log(compareArrLength(arr2, arr1));

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
const compareArrSum = (arrM, arrN) => {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < arrM.length; i++) {
    sum += arrM[i];
  }
  for (let j = 0; j < arrN.length; j++) {
    sum2 += arrN[j];
  }
  if (sum > sum2) {
    return arrM + " with sum " + sum + " is higher";
  } else {
    return arrN + " with sum " + sum2 + " is higher";
  }
};

console.log(compareArrSum(arr2, arr1));

//31) Get element with ID "container" from the page 
let container = document.getElementById("container");

//32) Get every "td" from the page 
let tableData = document.getElementsByTagName("td");

//33) Create a cycle that prints the text inside every td of the page
const printTd = (array) => {
  for (let i = 0; i < tableData.length; i++) {
    console.log(tableData[i].innerText);
  }
};

//34) Write a function to change the heading of the page 
const headingChange = () => {
    let heading = document.querySelector("h1");
    heading.innerText = "Bags online";
  };
  headingChange();

//35) Write a function to add an extra row to the table 
const extraRow = () => {
  let newtable = document.querySelector("table");
  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
};
extraRow();


//36) Write a function to add the class "test" to each row in the table
const addClassToRow = () => {
  let tr = document.querySelectorAll("tr");
  tr.className = "test";
  console.log(tr);
};
addClassToRow();

//37) Write a function to add a red background to every link in the page
const addbackgroundToLink = () => {
  let a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "red";
  }
};
addbackgroundToLink();

//38) Console log "Page loaded" when the page is correctly loaded 
const load = () => {
  console.log("Page loaded");
};

//40) Write a function to empty a list EXTRA 
const emptyList = () => {
  let mylist = document.querySelector(".abt");
  return (mylist = "");
};

    
 
    
    //41) Add an eventListener to alert when the mouse is over a link, displaying the URL 
    //42)Add a button to hide every image on the page 
   // 43) Add a button to hide and show the table from the page 
    //44) Write a function to sum every number inside the TD (if the content is numeric) 
   // 45) Delete the last letter from the title each time the user clicks on it 
    //46) Change a single TD background color when the user clicks on it 
    //47) Add a button DELETE, on click it should delete a random TD from the page 
    //48) Add a pink border to a cell when the mouse is over it 
    //49) Write a function to add a table with 4 rows and 3 columns programmatically 
    //50) Write a function to remove the table from the pag*/