function checkForName(userInput) {
    alert("Is Name Valid");
    console.log("::: Running checkForName :::", userInput);
    let names = [
        "Picard",
        "Dylan",
        "Ty",
        "Archer",
        "Han",
        "Luke",
        "Tony",
        "Peter"
    ]

    if(names.includes(userInput)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
