import 'regenerator-runtime/runtime'

const callAPI = async (website = '') => {
    const response = await fetch('http://localhost:8081/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ website: website }),
    })
    try {
        const appendData = await response.json();
        console.log(appendData);
        updateUI(appendData);
        return appendData;
    } catch (error) {
        console.log("Error!!!", error);
    }
}
export { callAPI }
export const updateUI = (appendData) => {
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${appendData.subjectivity}`;
    document.getElementById('polarity').innerHTML = `polarity: ${appendData.polarity}`;
}

