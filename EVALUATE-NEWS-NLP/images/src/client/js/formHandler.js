function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::");
    if (Client.verify(formText)) {
        Client.callAPI(formText)
        console.log("::: Form Sent :::")
    } else {
        alert("Enter a valid URL.")
    }
}

export { handleSubmit }
