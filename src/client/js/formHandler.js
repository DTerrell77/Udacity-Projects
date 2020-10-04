function handleSubmit(event) {
    console.log("handle submit")
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(appendData) {
        document.getElementById('results').innerHTML = appendData.message
    })    
}

export { handleSubmit }
