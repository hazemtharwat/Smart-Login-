let logout=document.querySelector("#logoutbtn");
let username=localStorage.getItem("username");

user.innerHTML=username


logout.addEventListener("click",function(){
    localStorage.removeItem("username")
    window.location.href="../../login/loginPage.html"
})