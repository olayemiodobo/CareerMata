document.getElementById("career-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let interest = document.getElementById("interest").value;
    
    let output = document.getElementById("output");
    output.innerHTML = `Hello ${name}, based on your interest in ${interest}, we suggest looking into roles in that field!`;
});
