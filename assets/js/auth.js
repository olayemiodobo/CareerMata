document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            if (!name || !email || !password) {
                document.getElementById("signupError").innerText = "All fields are required.";
                return;
            }

            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Signup successful! You can now login.");
            window.location.href = "index.html";
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
                document.getElementById("loginError").innerText = "Invalid email or password.";
                return;
            }

            alert("Login successful!");
            window.location.href = "dashboard.html";
        });
    }
});
