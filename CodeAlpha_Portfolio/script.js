function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}

function submitForm(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
}