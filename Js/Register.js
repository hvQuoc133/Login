
function togglePasswsordVisibility() {
    const passwordInput1 = document.getElementById('passwordInput1');
    const showPasswordButton = document.getElementById('showPassword1');
  
    if (passwordInput1.type === 'password') {
      passwordInput1.type = 'text';
      showPasswordButton.classList.remove('fa-eye');
      showPasswordButton.classList.add('fa-eye-slash');
    } else {
      passwordInput1.type = 'password';
      showPasswordButton.classList.remove('fa-eye-slash');
      showPasswordButton.classList.add('fa-eye');
    }
  }
  
  function togglePasswsordVisibility1() {
    const passwordInput2 = document.getElementById('passwordInput2');
    const showPasswordButton = document.getElementById('showPassword2');
  
    if (passwordInput2.type === 'password') {
      passwordInput2.type = 'text';
      showPasswordButton.classList.remove('fa-eye');
      showPasswordButton.classList.add('fa-eye-slash');
    } else {
      passwordInput2.type = 'password';
      showPasswordButton.classList.remove('fa-eye-slash');
      showPasswordButton.classList.add('fa-eye');
    }
  }

  function ValidateInput() {
    // Lấy giá trị từ các trường nhập liệu
    var name = document.getElementById("nameInput").value;
    var phone = document.getElementById("phoneInput").value;
    var address = document.getElementById("addressInput").value;
    var email = document.getElementById("mailInput").value;
    var password1 = document.getElementById("passwordInput1").value;
    var password2 = document.getElementById("passwordInput2").value;
  
    // Kiểm tra xem các trường có trống không
    if (name === "") {
      document.getElementById("nameErrorMessage").innerText = "Please enter your name";
    } else {
      document.getElementById("nameErrorMessage").innerText = "";
    }
  
    if (phone === "") {
      document.getElementById("phoneErrorMessage").innerText = "Please enter your phone number";
    } else {
      document.getElementById("phoneErrorMessage").innerText = "";
    }

    if (address === "") {
      document.getElementById("addressErrorMessage").innerText = "Please enter your phone number";
    } else {
      document.getElementById("addressErrorMessage").innerText = "";
    }
  
    if (email === "") {
      document.getElementById("emailErrorMessage").innerText = "Please enter your email";
    } else if (!ValidateEmail(email)) {
      document.getElementById("emailErrorMessage").innerText = "Please enter a valid email";
    } else {
      document.getElementById("emailErrorMessage").innerText = "";
    }
  
    if (password1 === "") {
      document.getElementById("passwordErrorMessage").innerText = "Please enter your password";
    } else if (password1.length > 10) {
      document.getElementById("passwordErrorMessage").innerText = "Password must not exceed 10 characters";
    } else {
      document.getElementById("passwordErrorMessage").innerText = "";
    }
  
    if (password2 === "") {
      document.getElementById("confirmPasswordErrorMessage").innerText = "Please enter your password again";
    } else if (password1 !== password2) {
      document.getElementById("confirmPasswordErrorMessage").innerText = "Passwords do not match";
    } else {
      document.getElementById("confirmPasswordErrorMessage").innerText = "";
    }
  }
  
  function ValidateEmail(email) {
    // Kiểm tra định dạng email hợp lệ
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }