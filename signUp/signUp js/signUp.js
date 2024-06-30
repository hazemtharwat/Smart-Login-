let signupName = document.querySelector("#userName");
let signupemail = document.querySelector("#userEmail");
let signuppassword = document.querySelector("#userPassword");
let signup = document.querySelector("#Signup");
let nameAlert = document.querySelector("#nameAlert");
let emailAlert = document.querySelector("#emailAlert");
let passwordAlert = document.querySelector("#passwordAlert");
let existAlert = document.querySelector("#existAlert");
let successAlert = document.querySelector("#successAlert");
let allUsers=[];


if(localStorage.getItem("allUsers")!=null){
    allUsers=JSON.parse(localStorage.getItem('allUsers'))
}else{
    console.log("error to get data");
}
signup.addEventListener("click", (e) => {
    e.preventDefault();
    checkAllInputsAreValid();
})

function checkdata(regex, userData, dataAlert) {

    let pattern = regex
    if (pattern.test(userData.value)) {
        dataAlert.classList.replace("d-block", "d-none")
        userData.classList.add("is-valid")
        userData.classList.remove("is-invalid")
        return true;
    } else {
        dataAlert.classList.replace("d-none", "d-block")
        userData.classList.add("is-invalid")
        userData.classList.remove("is-valid")
        return false;
    }
}
function checkAllInputsAreValid(){
    if( checkdata(/^[a-zA-Z0-9$_]{2,}$/,signupName,nameAlert) == true &&
    checkdata(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,signupemail,emailAlert) == true&&
    checkdata(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,signuppassword,passwordAlert) == true)
    {
        addUser();
    }else{
        console.log("invalid input data");
    }

}
function addToLocalStorage(){
    localStorage.setItem("allUsers",JSON.stringify(allUsers))
}
function addUser(){
    let newUser={
        name:signupName.value,
        email:signupemail.value,
        password:signuppassword.value,
    }
    if(isAlreadyExist(newUser) == true){
        console.log("already EXIST " );
        existAlert.classList.replace("d-none","d-block")
    }else{
        existAlert.classList.replace("d-block","d-none")
        successAlert.classList.replace('d-none','d-block')
        setTimeout(function(){
            window.location.href="../../login/loginPage.html"
        },500)
        allUsers.push(newUser);
        addToLocalStorage()

    }

    }
 
function isAlreadyExist(newUser){
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].email.toLowerCase()== newUser.email.toLowerCase()){
            console.log("موجود" +newUser.email);
            return true;
        }
        }
    }