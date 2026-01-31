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
        }else{
            msg.textContent = "Access Denied ✖";
            msg.style.color = "red";
        }
    },1500);
});
