let form = document.querySelector("form")
let username = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let euser = document.querySelectorAll("span")[0];
let epass = document.querySelectorAll("span")[1];
let elogin = document.querySelectorAll("span")[2];
let localdata = JSON.parse(localStorage.getItem("data"));
console.log(localdata)
// console.log(euser,epass,elogin)
// console.log(form,username,password
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(username.value==""&&password.value==""){
//         alert("UserName Required")
//         alert("Password Required")
//     }
//     else if(username.value==""){
//         alert("Username required")
//     }
//     else if(password.value==""){
//         alert("password required")
//     }
//     else if(username.value=="ahad"&&password.value=="khan")
//     alert("Welcome To The Page")
// else{
//     alert("Wrong ID")
// }
// })
form.addEventListener("submit",(e)=>{
    euser.innerHTML = ""
    epass.innerHTML = ""
    elogin.innerHTML = ""
    let matching = localdata.find((e)=>{
        if(username.value == e.Email && password.value == e.pass){
            return e;
        }
    })
    console.log(matching);
    e.preventDefault();
    if(username.value==""&&password.value==""){
        euser.innerHTML="Type the Username"
        epass.innerHTML="Type the Password"
    e.preventDefault();

    }
    else if(username.value==""){
        euser.innerHTML="Type the Username"
        
    e.preventDefault();

    }
    else if(password.value==""){
        epass.innerHTML="Type the Password"
       

    e.preventDefault();

    }
    else if(matching){
        alert("Welcome Here")

    }
    else{
        elogin.innerHTML = "Password not matching"
    e.preventDefault();

    }

})
