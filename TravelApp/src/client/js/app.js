import {worldLocation, weatherPrediction, retrieveImage, computeDate} from './apiRequest';

//Field Inputs 
const inputPlace = document.getElementById('place');
const inputYear = document.getElementById('year-date');
const inputMonth = document.getElementById('month-date');
const inputDay = document.getElementById('day-date');

//Trip Fields 
const voyageIdea = document.getElementById('voyage-idea');
const voyageNum = document.getElementById('voyage-number');
const voyageName = document.getElementById('voyage-name');
const voyageDeparture = document.getElementById('voyage-departure');
const voyageTime = document.getElementById('voyage-time');

//Display
const geolocationName = document.getElementById('geolocation-name');
const geolocationPeriod = document.getElementById('geolocation-period');
const geolocationDate = document.getElementById('geolocation-date');
const geolocationForecast = document.getElementById('geolocation-forecast');
const geolocationForecastCondition = document.getElementById('geolocation-forecast-condition');

//Mode
const background = document.querySelector('.background');
const mode = document.getElementById('mode');
const voyageListBox = document.getElementById('voyage-list-box');
const voyagePlan = document.getElementById('voyage-plan');
const voyageRecord = document.getElementById('voyage-record');
const voyageChecklist = document.getElementById('page-box-voyage-form');

//City images
const cityImgBox = document.getElementById('popular-city-image');

//Form
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
//Submit Button
let closeButn = document.getElementById('mode-press-box');

//Data
let data = {};
let number = 0;
//voyage-list Data
const voyageListData = [];
//Handle submit
const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputPlace.value === '' || inputYear.value === '' || inputMonth.value === '' || inputDay.value === '') {
        errorElement.innerText = "Error Message"
    }

    background.style.display = 'block';
    mode.style.display = 'block';

    const location = await worldLocation(inputPlace.value);
    const dayPeriod = computeDate(inputDay.value, inputMonth.value, inputYear.value);
    const weatherData = await weatherPrediction(location.latitude,location.longitude);
    const imgData = await retrieveImage(inputPlace.value);
    number++;

    data = {
        number,
        title: inputPlace.value,
        day: dayPeriod,
        years: inputYear.value,
        months: inputMonth.value,
        days: inputDay.value,
        latitude: location.latitude,
        longitude: location.latitude,
        temperature: weatherData.temperature,
        condition: weatherData.condition,
        cityImage: imgData.cityImage,
        countryImage: imgData.countryImage
    }
    updateUI(data);
    updateList(data);
}

//UpdateUI
const updateUI = (data) => {
    geolocationName.innerHTML = inputPlace.value;
    geolocationDate.innerHTML = "Arrive date: " + `${inputDay.value}/${inputMonth.value}/${inputYear.value}`;
    geolocationPeriod.innerHTML = data.day < 0 ? "Please Type valid Inforamation" : "Days to leave: " + data.day + ' days Left'; 
    geolocationForecast.innerHTML = data.temperature;
    geolocationForecastCondition.innerHTML = data.condition;
    cityImgBox.style.background = `url(${data.cityImage})`;
}

//Update List
const updateList = (data) => {
    voyageListData.push(data);
    voyageIdea.innerHTML += ` 
    <div class="voyage-list-items">
        <p>${data.number}</p>
        <p>${data.title}</p>
        <p>${data.day}</p>
        <p>${data.days} / ${data.months} / ${data.years}</p>
    </div>`
}

// Close Mode
const closeMode = () => {
    background.style.display = 'none';
    mode.style.display = 'none';
}

//Plan a trip
const planATrip = () => {
    voyageChecklist.style.display = 'block';
    voyageListBox.style.display = 'none';
}

//Trip Log
const tripLog = () => {
    voyageChecklist.style.display = 'none';
    voyageListBox.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", loading_Done);
function loading_Done() {
    form.addEventListener('submit', handleSubmit);
    closeButn.addEventListener('click',closeMode);
    voyagePlan.addEventListener('click',planATrip);
    voyageRecord.addEventListener('click',tripLog);
}

export {
    handleSubmit
}