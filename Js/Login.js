//Login
//Check password 
function togglePasswsordVisibility() {
  const passwordInput = document.getElementById('passwordInput');
  const showPasswordButton = document.getElementById('showPassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.classList.remove('fa-eye');
    showPasswordButton.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    showPasswordButton.classList.remove('fa-eye-slash');
    showPasswordButton.classList.add('fa-eye');
  }
}

//Validate
function ValidateInput() {
  var input = document.getElementById('mailInput').value;
  var errorMessage = document.getElementById("emailErrorMessage");

  var passwordInput = document.getElementById("passwordInput").value;
  var passwordErrorMessage = document.getElementById("passwordErrorMessage");

  if (input === "") {
    errorMessage.innerHTML = "*Vui lòng điền vào ô email!";
  } else {
    errorMessage.innerHTML = "";
  }

  if (passwordInput === "") {
    passwordErrorMessage.innerHTML = "*Vui lòng điền thông tin vào ô password!";
  } else {
    passwordErrorMessage.innerHTML = "";
  }
}

// document.getElementById("mailInput").addEventListener("input", function() {
//   document.getElementById("emailErrorMessage").innerHTML = "";
// });

// document.getElementById("passwordInput").addEventListener("input", function() {
//   document.getElementById("passwordErrorMessage").innerHTML = "";
// });