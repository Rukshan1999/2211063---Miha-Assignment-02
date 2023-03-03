// Get the sign-in form and sign-up form
const signinForm = document.querySelector("#signin-form");
const signupForm = document.querySelector("#signup-form");

// Add event listener to the sign-in form
signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get the username and password entered by the user
  const username = signinForm.elements["username"].value;
  const password = signinForm.elements["password"].value;
  // Check if the username and password match the stored data
  const storedData = JSON.parse(localStorage.getItem(username));
  if (storedData && storedData.password === password) {
    // Redirect the user to the home page
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password!");
  }
});

// Add event listener to the sign-up form
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get the new username and password entered by the user
  const newUsername = signupForm.elements["new-username"].value;
  const newPassword = signupForm.elements["new-password"].value;
  // Check if the username already exists in local storage
  const storedData = JSON.parse(localStorage.getItem(newUsername));
  if (storedData) {
    alert("Username already exists. Please choose a different username.");
  } else {
    // Store the new username and password in local storage
    localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
    alert("User created successfully!");
    // Reset the sign-up form
    signupForm.reset();
  }
});
