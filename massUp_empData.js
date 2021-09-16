// get the current value of the emp deafult

var Newemp = document.querySelectorAll(".td_allowrate")[0].innerText;
var emp =  Math.floor(Newemp);
emp = emp;
localStorage.setItem("emp", emp.toString())
console.log(emp);
//  add test project select "Allowance "

 // add test project select "Mass update "


     // check employee case 70 - below code
     document.querySelector("#chk_selected_1").checked = true;

    // entry of rate 

        setTimeout(()=>{


           var rate =  document.querySelector("#txt_rate").value = 50;
           console.log(rate);
           var emp  = Number(localStorage.getItem("emp"));
           console.log(emp);
           var empRate = Math.floor(rate) + Math.floor(emp);
           console.log(empRate);
           // save the value of the addition 
           var Result =  parseFloat(empRate).toFixed(5);
           console.log(Result);
           Result = Result;
           localStorage.setItem("Result", Result)
           

        },4000)



// add test project click "btn_mass_update" and click save , 
//navigate to employee default allowance , select mass update and click employee Case 70 to validate code below: 

var rateReflected = document.querySelectorAll(".td_allowrate")[0].innerText;
console.log(rateReflected);
// match the value if same from the computation to the result from "rateReflected"

let Result = localStorage.getItem("Result"); 
console.log(Result);
((rateReflected) === Result) ? alert('Matching Value!') : alert('Value do not match');

// add tp get text and  accept alert. 

// :) solved