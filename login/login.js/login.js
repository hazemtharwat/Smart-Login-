let loginEmail=document.querySelector("#userEmailLogin");
let loginPassword=document.querySelector("#userPasswordLogin");
let loginbtn=document.querySelector("#loginbtn");
let successAlert=document.querySelector("#successAlert");
let allUsers=[]
if(localStorage.getItem("allUsers")!=null){
allUsers=JSON.parse(localStorage.getItem("allUsers"));
}

loginbtn.addEventListener("click",function(e){
    e.preventDefault()
    // userIsValid()
    loginData()
    // if(userIsValid()==true){
    //     
        
    // }  
    
})
function loginData(){
    let userData={
        email:loginEmail.value,
        password:loginPassword.value,
    }
    
  if(  userIsValid(userData)==true){
    setTimeout(function(){
            window.location.href='../../Home/home.html'
            },500)
  }
}

function userIsValid(userData){

    for(let i=0 ; i<allUsers.length; i++){
    if((allUsers[i].email.toLowerCase() == userData.email.toLowerCase()) 
        && (allUsers[i].password == userData.password)){
       
        successAlert.classList.replace('d-none','d-block');
        
       
            // return true;
        /* ( return   لما بشغل ال 
        0 مش بيكمل اللوب وبيجيب ان الايميل مش موجود لانه فى اندكس غير اندكس ) 
        
        */
        }
        else{
            console.log("مش تبعنا");
            successAlert.classList.replace('d-block','d-none');
            // return false
        }
       
}
}