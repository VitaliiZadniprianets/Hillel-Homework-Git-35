let firstName = "Vitalii";
console.log(firstName);

let lastName = "Zadniprianets";
console.log(firstName);

let surName = 'Igorovich';
console.log(surName);

let someString = " ";
console.log(someString);

function getFullName (first,last,sur,string) {
  let someFullName = first + string + sur + string + last;
  console.log(someFullName);
};

let fullName = "";

fullName = getFullName(firstName,lastName,surName,someString);

let someValue = 2 ;
