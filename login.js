document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector('.pswrd');
    var show = document.querySelector('.show');
    show.addEventListener('click', active);
  
    function active() {
      if (input.type === "password") {
        input.type = "text";
        show.style.color = "#1DA1F2";
        show.textContent = "HIDE";
      } else {
        input.type = "password";
        show.textContent = "SHOW";
        show.style.color = "#111";
      }
    }
  
    // Load login information if available
    var savedLogins = JSON.parse(localStorage.getItem('logins')) || [];
    if (savedLogins.length > 0) {
      var lastLogin = savedLogins[savedLogins.length - 1];
      document.getElementById('email-username').value = lastLogin.emailUsername;
      document.getElementById('remember-me').checked = lastLogin.rememberMe;
    }
  
    // Save login information and display saved logins
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting
  
      var emailUsername = document.getElementById('email-username').value;
      var rememberMe = document.getElementById('remember-me').checked;
  
      var loginInfo = {
        emailUsername: emailUsername,
        rememberMe: rememberMe
      };
  
      var savedLogins = JSON.parse(localStorage.getItem('logins')) || [];
      savedLogins.push(loginInfo);
      localStorage.setItem('logins', JSON.stringify(savedLogins));
  
      // Display saved logins in the console
      console.log('Saved Logins:', savedLogins);
  
      // Perform actual login process here (e.g., send data to the server)
      alert('Login information saved and form submitted!'); // Placeholder action
    });
  });
  