// helper function (fake IP generator)
function generateRealIP() {
    return Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 256)
    ).join(".");
}

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
            if (agent === "shadow" && key === "7391") {
                // ✅ correct credentials
                msg.textContent = "Access Granted ✔";
                msg.style.color = "#00ff9c";

                setTimeout(() => {
                    window.location.href = "access.html";
                }, 600);

            } else {
                // ❌ wrong credentials
                const realIP = generateRealIP();
                sessionStorage.setItem("real_ip", realIP);

                msg.textContent = "Access Denied ✖";
                msg.style.color = "red";

                setTimeout(() => {
                    window.location.href = "access_denied.html";
                }, 600);
            }
        }, 1500);
    });
}
