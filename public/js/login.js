const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        console.log("response:", response);

        if (response.ok) {
            document.location.replace("/homepage");
        } else {
            alert("Failed to log in. Please check your username and password and try again");
        }
    }
};
document.getElementById("login-form").addEventListener("click", loginFormHandler);
