function signup(){
    var pswd1 = document.getElementById("password1");
    var pswd2 = document.getElementById("password2");

    if (!(pswd1.value === pswd2.value)) {
        alert("Passwords do not match.");
        pswd1.value = null;
        pswd2.value = null;
    }
    
    console.log("user account created")
}

function login(){
    console.log()
}

function studentAccountSelected(){
    console.log("student account selected")
}
function tutorAccountSelected(){
    console.log("tutor account selected")
}