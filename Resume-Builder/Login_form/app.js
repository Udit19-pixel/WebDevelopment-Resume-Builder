window.alert("User registered")
function login()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email=="abc@gmail.com" && password=="123456")
    {
        alert("Succesful login");
        window.location.href("../Inner_resume/index.html");
    }
    else
    {
        alert("Invalid username or password");
    }
}