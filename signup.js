// Define an array to store user information
let users = [];

// Function to save user information
function saveUserInfo(firstName, lastName, email, gender, phoneNumber, dob, password) {
    let userInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        phoneNumber: phoneNumber,
        dob: dob,
        password: password
    };
    users.push(userInfo);
}

// Function to display user information
function displayUserInfo() {
    console.log("User Information:");
    users.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`First Name: ${user.firstName}`);
        console.log(`Last Name: ${user.lastName}`);
        console.log(`Email: ${user.email}`);
        console.log(`Gender: ${user.gender}`);
        console.log(`Phone Number: ${user.phoneNumber}`);
        console.log(`Date of Birth: ${user.dob}`);
        console.log(`Password: ${user.password}`);
        console.log("------------------------");
    });
}

// Event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user information
    saveUserInfo(firstName, lastName, email, gender, phoneNumber, dob, password);
    // Display user information
    displayUserInfo();
    // Reset the form
    document.getElementById("signupForm").reset();
});
