let firstname = document.querySelectorAll("input")[0]
let lastname = document.querySelectorAll("input")[1]
let email = document.querySelectorAll("input")[2]
let mobile = document.querySelectorAll("input")[3]
let createpassword = document.querySelectorAll("input")[4]
let confirmpassword = document.querySelectorAll("input")[5]
// console.log(firstname,lastname,email,mobile,createpassword,confirmpassword)
let efirst = document.querySelectorAll("span")[0]
let elast = document.querySelectorAll("span")[1]
let eEmail = document.querySelectorAll("span")[2]
let emob = document.querySelectorAll("span")[3]
let epass1 = document.querySelectorAll("span")[4]
let epass2 = document.querySelectorAll("span")[5]
let form = document.querySelector("form")
let storage = [];
// console.log(storage)
let localdat = JSON.parse(localStorage.getItem("data"));
// console.log(localdat)
if(localdat){
    storage = localdat;
}
// console.log(storage)
// console.log(efirst,elast,eEmail,emob,epass1,epass2,form)
form.addEventListener("submit",(e)=>{
    let regx = /^[a-zA-Z]{2,15}$/;
    let regx1 = /^[6-9][0-9]{9}$/
    let regx2 = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let flag = true;
    // e.preventDefault();

    if(firstname.value==""){
        efirst.innerHTML = "first name is required"
        e.preventDefault();
        flag= false;
    }
    else if(regx.test(firstname.value)){
        efirst.innerHTML=""
    }
    else{
        efirst.innerHTML="invalid first name"
        e.preventDefault();
        flag= false;

    }
    if(lastname.value==""){
        elast.innerHTML = "last name is required"
        e.preventDefault();
        flag= false;

    }
    else if(regx.test(lastname.value)){
        elast.innerHTML=""
    }
    else{
        elast.innerHTML="invalid last name"
        e.preventDefault();
        flag= false;

    }
    if(email.value==""){
        eEmail.innerHTML="Email Required"
        e.preventDefault();
        flag= false;

    }
    else{
        eEmail.innerHTML = ""
    }
    if(mobile.value == ""){
        emob.innerHTML = "Number is Required"
        e.preventDefault();
        flag= false;

    }
    else if(regx1.test(mobile.value)){
        emob.innerHTML=""
    }
    else{
        emob.innerHTML="Invalid Number"
        e.preventDefault();
        flag= false;

    }
    if(createpassword.value == ""){
        epass1.innerHTML="password is required"
        e.preventDefault();
        flag= false;
        

    }
    else if(regx2.test(createpassword.value)){
        epass1.innerHTML=""
    }
    else{
        epass1.innerHTML="Invalid Password"
    }
    if(confirmpassword.value==createpassword.value){
        epass2.innerHTML=""
    }
    else{
        epass2.innerHTML="Password Dont Match"
        e.preventDefault();
        flag= false;


    }
    if(flag){
        let values = {
            First : firstname.value,
            Last : lastname.value,
            Email : email.value,
            phone: mobile.value,
            pass : createpassword.value 

        };
        console.log(values)
        storage.push(values)
    console.log(storage)
    localStorage.setItem("data",JSON.stringify(storage));
    e.preventDefault();
    }
    
})