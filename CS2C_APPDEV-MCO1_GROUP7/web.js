/*function checkPassEmail(){
 //const email = document.getElementById("uname_input").toLowerCase();
 //const password = document.getElementById('password_input').toLowerCase();
 const email = localStorage.getItem("uname_input");
 const password = localStorage.getItem("password_input");
 const user = "joeberttababan@gmail.com";
 const joebertpass = "joeberttababan";
 
 if(email===user.includes(password===joebertpass)){
  alert("HELLO JOEBERT");
  console.log("IS IT WORKING?");
 }
 else{
  console.log("mali ang iyong nilagay na password");
  prompt("who are you?");
 }
}*/



function checkPassEmail(form){
  //const user = "joeberttababan@gmail.com";
  //const pass = "joeberttababan";

  if(form.userid.value == "joeberttababan@gmail.com" && form.pswrd.value == "joeberttababan") {
    window.open('home.html')
}
else {
    info("Error Password or Username")
}
}

function singin(){
  window.open('sign-upForm.html')
}


/*let button = document.getElementById('btn1');
const x = location.href;

function home(){
 
}

function toLogIn(){
  if (button===button){
   alert('joebert');
  }
  else{
    console.log("stay");
  }
}
/*
switch(userMembership){
  case userMembership:
   if(userMembership == "Gold" && password.includes("youAreAmazing!")&& userName.includes("joebert")){
    console.log("Welcome to Exclusive Inocecia Store");
    console.log("Member Username: " + userName);
    console.log("Membership: " + userMembership + " Membership");
    console.log(" ");
    console.log("Orders:");
    console.log(" ");
    console.log((sum/100)*100);
    console.log("your order is: " + ITEMONE);
   }else if(userMembership == "Regular"){
    console.log("regular");
  }else{
    console.log("you have'nt enter your membership");
  }
  case userName&&password:
      if(userName == "joebert" && password.includes("youAreAmazing!") ){
         console.log("hello joebert");
         }else if(userName == "Danny"&& password.includes("danny45yeah")){
            console.log("hello Danny");
           }else{
                console.log("Who are you?");
                 }
}*/