//API Keys & URLs
const geonamesKey = 'dterrell21';
const geoNames_URL = 'http://api.geonames.org/searchJSON?q=';
const weatherBitKey = '6f5c031dd91b443ea557ff1c3220f1cb';
const weatherBit_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabayKey = '18987468-51ece8497cc1bffc453b75b63';
const pixabay_URL = "https://pixabay.com/api/?key=";

//Error Notification
const errorNotification = document.getElementById('error');

//Compute Date of Departure 
function computeDate(inputDay, inputMonth, inputYear) {
    const presentDate = new Date();
    const plannedDate = new Date(inputYear, inputMonth-1, inputDay);
    return Math.ceil((plannedDate - presentDate) / 1000 / 60 / 60 / 24);  ;
}

//Get Location using geonames API 
const worldLocation = async (placeName) => {
    const website = geoNames_URL + placeName + '&maxRows=10' + '&username=' + geonamesKey;
    console.log(website);
    try {
        const res = await fetch(website);
        const locatejsonRes = await res.json();
        const locateData = {};
        locateData.latitude = locatejsonRes.geonames[0].lat;
        locateData.longitude = locatejsonRes.geonames[0].lng;
        locateData.countryCode = locatejsonRes.geonames[0].countryCode;
        return locateData;
    } catch (error) {
        errorNotification.innerHTML = "Oops! Invalid Option!";
        throw new Error('Fetch Error');
    }
} 

//Get weather using weatherBit API
const weatherPrediction = async (latitude, longitude) => {

    const website = weatherBit_URL + '&lat=' + latitude + '&lon=' + longitude + '&key=' + weatherBitKey;
    try {
        const res = await fetch(website);
        const forecastJSONData = await res.json();
        const forecastData = {};
        forecastData['temperature'] = forecastJSONData['data'][0]['temp'];
        forecastData.condition = forecastJSONData.data[0].weather.description;
        return forecastData;
    } catch (error) {
        errorNotification.innerHTML = "Oops! Invalid Option!";
        throw new Error('Fetch Data Error');
    }
}

//Get Image of location using pixabay API 
const retrieveImage = async (city, country) => {

    const cityImg = `&q=${city}&image_type=photo`;
    const countryImg = `&q=${country || 'Japan Flag'}&image_type=photo`;

    const cityURL = pixabay_URL + pixabayKey + cityImg;
    const countryURL = pixabay_URL + pixabayKey + countryImg;

    return fetch(cityURL)
        .then(res => res.json())
        .then(cityDataJson => {
            if (cityDataJson.totalHits > 0) {
                return fetch(countryURL).then(res => res.json()).then(countryDataJSON => {
                    if (countryDataJSON.totalHits > 0) {
                        return {
                            countryImage: countryDataJSON.hits[0].largeImageURL,
                            cityImage: cityDataJson.hits[0].largeImageURL,
                        };
                    }
                });
            }
        }, error => {
            errorNotification.innerHTML = "Oops! Invalid Option!";
            throw new Error("Invaid Information");
        }).catch(error => {
            errorNotification.innerHTML = "Oops! Invalid Option!";
            throw new Error("Invaid Information");
        });
}

export {
    worldLocation,
    weatherPrediction,  
    retrieveImage,
    computeDate
}