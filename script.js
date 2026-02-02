const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

// run only if this page has the login form
if (form && msg) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const agent = document.getElementById("agent").value;
        const key = document.getElementById("key").value;

        msg.style.color = "#00ff9c";
        msg.textContent = "Verifying credentials...";

        setTimeout(() => {
            // correct credentials
            if (agent === "shadow" && key === "7391") {
                msg.textContent = "Access Granted ✔";
                msg.style.color = "#00ff9c";

                // redirect to home page
                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);

            } else {
                msg.textContent = "Access Denied ✖";
                msg.style.color = "red";
            }
        }, 1500);
    });
}
