const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const signupButton = document.getElementById("signup-form-submit");

var email;

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  email = loginForm.username.value;
  const password = loginForm.password.value;

  const body = JSON.stringify({
    email: email,
    password: password
  })

  login(body);
})

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  email = loginForm.username.value;
  const password = loginForm.password.value;

  const body = JSON.stringify({
    email: email,
    password: password
  })

  signup(body);
})

async function signup(body) {
  document.getElementById('error').innerHTML = '';
  const Http = new XMLHttpRequest();
  const url = "https://rahim-api.onrender.com/signup";

  Http.open("POST", url);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.withCredentials = true

  Http.onload = () => {
    if (Http.readyState == 4 && Http.status != 500) {
      parseLogin('Signed up');
    } else if (Http.responseText.includes('EMAIL_EXISTS')) {
      showError('Email already exists');
    } else if (Http.responseText.includes('WEAK_PASSWORD')) {
      showError('Weak password. Minimum length should be 6 letters long');
    }
  };

  Http.send(body);
}

async function login(body) {
  document.getElementById('error').innerHTML = '';
  const Http = new XMLHttpRequest();
  const url = "https://rahim-api.onrender.com/signin";

  Http.open("POST", url);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.withCredentials = true

  Http.onload = () => {
    if (Http.readyState == 4 && Http.status != 500) {
      parseLogin('Logged in');
    } else {
      if (Http.responseText == 'INVALID_LOGIN_CREDENTIALS') {
        showError('Invalid login credentials.');
      }
    }
  };

  Http.send(body);
}

function parseLogin(status) {
  document.getElementById('error').innerHTML = status + ' successfully. You will be redirected shortly.';
  localStorage.setItem("email", email);
  setTimeout(function () {
    window.location.href = "home.html";
  }, 2000);
}

function showError(error) {
  document.getElementById('error').innerHTML = error;
}