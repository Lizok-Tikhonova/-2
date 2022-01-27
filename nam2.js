let name = "liZa";
let surname = "TIkhoNoVa";
let new_name = name.toLowerCase();
let new_surname = surname.toLowerCase();
correct_name = new_name[0].toUpperCase() + new_name.slice(1);
correct_surname = new_surname[0].toUpperCase() + new_surname.slice(1);
console.log(correct_name, correct_surname);
name === correct_name ? console.log("Изменений в имени не произошло") : console.log("Изменения в имени произошли");
surname === correct_surname ? console.log("Изменений в фамилии не произошло") : console.log("Изменения в фамилии произошли");
