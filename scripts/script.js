const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;

const temp = 27;
const windSpeed = 15;

document.querySelector("#temp").innerHTML = `${temp}&deg;C`;
document.querySelector("#wind").innerHTML = `${windSpeed} km/h`;

function calculateWindChill(t, s) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));
}

let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + "&deg;C";
} else {
    windChill = "N/A";
}

document.querySelector("#chill").innerHTML = windChill;