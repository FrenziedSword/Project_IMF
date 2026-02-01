function generateRealIP() {
  return Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 256)
  ).join(".");
}

const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const agent = document.getElementById("agent").value;
    const key = document.getElementById("key").value;

    msg.style.color = "#00ff9c";
    msg.textContent = "Verifying credentials...";

    setTimeout(()=>{
        if(agent === "shadow" && key === "7391"){
            msg.textContent = "Access Granted ✔";
            msg.style.color = "#00ff9c";

            setTimeout(()=>{
                window.location.href = "access.html";
            }, 600);
        }else{
            const realIP = generateRealIP();

            sessionStorage.setItem("real_ip", realIP);

            msg.textContent = "Access Denied ✖";
            msg.style.color = "red";

            setTimeout(function(){
                // use href so the denied page is in history (user can go back)
                window.location.href = "access_denied.html";
            }, 600);
        }
    },1500);
});
