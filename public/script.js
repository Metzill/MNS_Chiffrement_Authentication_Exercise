document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((message) => {
        if (message === "Login successful!") {
          alert(message);
        } else {
          document.getElementById("error-message").textContent = message;
          document.getElementById("error-message").style.display = "block";
        }
      })
      .catch((error) => console.error("Error:", error));
  });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((message) => {
        document.getElementById("register-message").textContent = message;
        document.getElementById("register-message").style.display = "block";
      })
      .catch((error) => console.error("Error:", error));
  });
