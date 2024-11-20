
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "User" && password === "12345") {
        alert("Login Success! Redirecting to Patient Dashboard...");
        window.location.href = "patient.html"; 
    }
    else if (username === "Admin" && password === "123@45") {
        alert("Login Success! Redirecting to Employee Dashboard...");
        window.location.href = "employee.html"; 
    }
    else {
        alert("Invalid Username or Password.");
    }
});