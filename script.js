const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('Noida'); // Set Noida as the initial city
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a')); // Corrected date format to include year
	$('#temperature').
		html(`${Math.round(data.main.temp)}°C`); // Rounded temperature
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#city-input-btn').on('click', function () {
    let cityName = $('#city-input').val();
    if (cityName) {
        weatherFn(cityName);
    } else {
        alert("Please enter a city name.");
    }
});

	$('#weather-info').fadeIn();

}
const quoteElement = document.getElementById('quotes');
const quotes = [
	"“The best way to predict the future is to create it.” – Peter Drucker",
	"“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
	"“Don't watch the clock; do what it does. Keep going.” – Sam Levenson",
	"“The harder you work for something, the greater you'll feel when you achieve it.” – Unknown",
	"“Dream bigger. Do bigger.” – Unknown",
	"“Don't stop when you're tired. Stop when you're done.” – Marilyn Monroe",
	"“Little things make big days.” – Unknown",
	"“It's going to be hard, but hard does not mean impossible.” – Unknown",
	"“Push yourself, because no one else is going to do it for you.” – Unknown",
	"“Great things never come from comfort zones.” – Unknown"
];
const randomIndex = Math.floor(Math.random() * quotes.length);
quoteElement.textContent = quotes[randomIndex];

function refreshQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	quoteElement.textContent = quotes[randomIndex];
}

setInterval(refreshQuote, 10000); // Refresh quote every 10 seconds	
refreshQuote(); // Initial call to display a quote immediately






