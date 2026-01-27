const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;

const temp = 8; // Lowered temp to test the wind chill logic
const windSpeed = 10;

document.querySelector("#temp").innerHTML = `${temp}&deg;C`;
document.querySelector("#wind").innerHTML = `${windSpeed} km/h`;

// Criteria 7: One-line function
const calculateWindChill = (t, s) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));

let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temp, windSpeed).toFixed(1)}&deg;C`;
}

document.querySelector("#chill").innerHTML = windChill;