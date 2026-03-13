document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    fetch("https://YOUR_BACKEND_URL/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        } else {
            alert("Login failed: " + data.message);
        }
    })
    .catch(err => alert("Error: " + err));
});

document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    fetch("https://YOUR_BACKEND_URL/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            alert("Account created! Please login.");
            window.location.href = "index.html";
        } else {
            alert("Registration failed: " + data.message);
        }
    })
    .catch(err => alert("Error: " + err));
});
