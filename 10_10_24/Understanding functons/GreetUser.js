function greetUser(name) {
    name = prompt("Enter your name");
    if(name == null || name == ""){
        name = "Guest";
    }
    return name;
}
console.log("Hello, " + greetUser() + "!");
