/* Global Variables */

// Create HTML elements to get their values
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');

// Init OpenWeatherMap API and Personal API Key
// Init Server
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'cb11d2f37c245dcb1f353a65d2d225b6';
const server = 'http://localhost:3000';

// Create an HTML element to listen for any click events
const butn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Create function for Event listener 
butn.addEventListener('click', () => {
    getWeather(baseURL, zip.value, apiKey)
        
        .then(data => {
            postData('/add', data);
            return data;
        })

        .then(temp => {
            return {date: newDate, temp, content: feelings.value};
        })
        
        .then(({temp, date, content}) => updateUI(temp, date, content))
        
        .catch(e => {
            console.error(e);
        });
});

// Update UI
const updateUI = async (temperature, newDate, feelings) => {
    date.innerText = newDate;
    content.innerText = feelings;
    temp.innerText = `${temperature} deg`;
};

// Create Function to the GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey) => {
    try {
        const req = await fetch(`${baseURL}?zip=${zip},us&units=metric&APPID=${apiKey}`);
        const results = await req.json();
        const {
            main: {temp},
        } = results;
        return temp;
    } catch (error) {
        console.log('error: ', error);
    }
};


// Create Function to POST data
const postData = async (url = '', data = {}) => {
    try {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
        console.log('Post');
        const newData = await postRequest.json();
        console.log(newData, 'Post');
        return newData;
    }
    catch(error){
        console.log('error', error);
    }
}
