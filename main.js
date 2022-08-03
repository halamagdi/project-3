
var signConatiner = [];
if (localStorage.getItem('userData') != null) {
    signConatiner = JSON.parse(localStorage.getItem('userData'));

}

var signNameInput = document.getElementById('signUpName');
var signEmailInput = document.getElementById('signUpEmail');
var signPassInput = document.getElementById('signUpPassword');
var logEmailInput = document.getElementById('loginEmail');
var logPasswordInput = document.getElementById('loginPassword');


function addData() {
    if (validationInput()) {
        var signData = {
            name: signNameInput.value,
            email: signEmailInput.value,
            password: signPassInput.value,
        }
        signConatiner.push(signData);
        localStorage.setItem('userData', JSON.stringify(signConatiner));
        clearInput();
        console.log(signConatiner);
    }
    else {
        document.getElementById('syntaxError').innerHTML = ` <span class="my-3 text-danger">All inputs is required</span>`;
    };
};


function clearInput() {
    signNameInput.value = "";
    signEmailInput.value = "";
    signPassInput.value = "";
}
function validationInput() {
    if (signNameInput.value != "" && signEmailInput.value != "" && signPassInput.value != "") {
        return true;
    }
    else {
        return false;
    }
}

function logUser() {
    signConatiner = JSON.parse(localStorage.getItem('userData'))
    console.log(signConatiner.length);

    for (var i = 0; i < signConatiner.length; i++) {
        console.log("0")
        if (signConatiner[i].email == logEmailInput.value
            &&
            signConatiner[i].password == logPasswordInput.value) {
        
            window.location.href = "home.html"
           
            localStorage.setItem("CurrentLog",signConatiner[i].name)


        } else{
            console.log("000")
        }
       
    }

}

if(document.getElementById("welcome") != null){
    document.getElementById("welcome").innerHTML=`<h1> Welcome ${localStorage.getItem("CurrentLog")}</h1>`;
}
















