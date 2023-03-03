// Get the add user form
const addUserForm = document.querySelector("#add-user-form");

// Add event listener to the add user form
addUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get the new username and password entered by the user
  const newUsername = addUserForm.elements["new-username"].value;
  const newPassword = addUserForm.elements["new-password"].value;
  // Check if the username already exists in local storage
  const storedData
  = JSON.parse(localStorage.getItem(newUsername));
  if (storedData) {
  alert("Username already exists. Please choose a different username.");
  } else {
  // Store the new username and password in local storage
  localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
  alert("User created successfully!");
  // Reset the add user form
  addUserForm.reset();
  }
  });