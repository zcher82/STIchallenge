
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];


 var percentage = function(empName) {
   var percent = 0;

   switch (empName[3]) {
     case 0:
     case 1:
     case 2:
      percent = 0;
       break;
      case 3:
        percent = 4;
        break;
      case 4:
        percent = 6;
        break;
      case 5:
        percent = 10;
        break;
   }

   if (empName[1].length <= 4) {
     percent += 5;
   }
   if (parseInt(empName[2]) > 65000) {
     percent -= 1;
   }
   if (percent > 13) {
     percent = 13;
   }
   return percent;
 }

 function newArray(origArray) {
   var empArray = [];
   var perc = percentage(origArray);
   empArray[0] = origArray[0];
   empArray[1] = perc + "%";
   empArray[2] = Math.round(((perc/100) + 1) * origArray[2]);
   empArray[3] = Math.round(empArray[2] - origArray[2]);
   return empArray;
 };
 for (var i = 0; i < employees.length; i++) {
    console.log(newArray(employees[i]));
 }
