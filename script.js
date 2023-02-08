const form = document.getElementById("form-contact");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    alert(`Name: ${name} email: ${email} text: ${message}`);
})