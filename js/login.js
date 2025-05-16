function validateForm() {
    const username = document.forms[0]["username"].value;
    const password = document.forms[0]["password"].value;

    if (!username || !password) {
      alert("Please fill in all required fields.");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  }

  function validateForm() {
    // Optionally: validate credentials here (e.g., dummy check)
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Dummy check (you can remove this if not needed)
    if (username && password.length >= 6) {
        // Redirect to index.html
        window.location.href = "home.html";
        return false; // Prevent actual form submission
    }

    // Optional error feedback
    alert("Invalid credentials");
    return false;
}

  document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.auth-form');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active-tab'));
        this.classList.add('active-tab');
        
        // Update form visibility
        const targetForm = this.textContent.trim() === 'Login' ? 'loginForm' : 'registerForm';
        forms.forEach(form => form.classList.remove('active-form'));
        document.getElementById(targetForm).classList.add('active-form');
        
        // Update heading text
        const heading = document.querySelector('.label h3');
        const subheading = document.querySelector('.label h4');
        
        if (targetForm === 'loginForm') {
          heading.textContent = 'Already Registered!!!!!';
          subheading.textContent = 'Login And Start Coding';
        } else {
          heading.textContent = 'Are You New Here?';
          subheading.textContent = 'What Are You Waiting For Register To Start Your Journey!';
        }
      });
    });
    
    // Initialize with login form active
    document.querySelector('.tab.active-tab').click();
    
    // Form validation (basic example)
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = this.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
          } else {
            input.classList.remove('error');
          }
        });
        
        if (isValid) {
          alert(`${this.id === 'loginForm' ? 'Login' : 'Registration'} successful!`);
          // this.submit(); // Uncomment to actually submit the form
        }
      });
    });
  });

