// login form javascript

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const specialChars = "#$%^&*()_+=";

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  } else if (username.includesAny(specialChars)) {
    alert("Username  cannot contains special characters");
  } else {
    alert("Login successful!");
  }
}

function forgotPassword() {
  alert("Please contact support to reset your password.");
}

String.prototype.includesAny = function (characters) {
  for (let i = 0; i < characters.length; i++) {
    if (this.includes(characters[i])) {
      return true;
    }
  }
  return false;
};

// Registration form javascript

function registerUser() {
  const firstName = document.getElementsByName("firstName")[0].value;
  const lastName = document.getElementsByName("lastName")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const phone = document.getElementsByName("phone")[0].value;
  const password = document.getElementsByName("password")[0].value;
  const confirmPassword =
    document.getElementsByName("confirmPassword")[0].value;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !confirmPassword
  ) {
    alert("Please fill in all the fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  } else {
    alert("Register successfully");
  }

}

// Add to card javascript
const addToCartButtons = document.querySelectorAll(".cards button");
const cartIcon = document.querySelector(".shopping-icon");

let cartItems = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems++;
    cartIcon.textContent = `Card (${cartItems})`;
  });
});

// costumer review section
let slide = document.querySelectorAll(".customer");
let count = 0;
// console.log(slide);

slide.forEach(function (customer, index) {
  customer.style.left = `${index * 100}%`;
});

function next() {
  count++;
  if (count == slide.length) {
    count = 0;
  }
  bar();
}

function pre() {
  count--;
  if (count == -1) {
    count = slide.length - 1;
  }
  bar();
}

function bar() {
  slide.forEach(function (customer) {
    customer.style.transform = `translateX(-${count * 100}%)`;
  });
}
