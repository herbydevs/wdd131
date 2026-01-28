// Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/aba-nigeria-temple-lds-273971-standard.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/manti-temple-768102-standard.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/payson-utah-temple-exterior-1416671-standard.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 22",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/yigo-guam-temple-2.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/salt-lake-temple-39128.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/washington-dc-temple-251787.jpg"
    },
    // 3 Additional Temples
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/johannesburg-south-africa-temple-223455.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/logan-temple-768119-standard.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Münchenbuchsee, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl: "https://content.churchofjesuschrist.org/templesapi/main/mini/400x250/bern-switzerland-temple-lds-653038-standard.jpg"
    }
];

// Footer & Menu Logic
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.textContent = nav.classList.contains("open") ? "X" : "☰";
});

// Temple Card Rendering Function
function displayTemples(filteredTemples) {
    const container = document.querySelector(".temple-grid");
    container.innerHTML = ""; // Clear existing content

    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        `;
        container.appendChild(figure);
    });
}

// Event Listeners for Filtering
document.getElementById("home").addEventListener("click", () => {
    document.getElementById("display-title").textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    document.getElementById("display-title").textContent = "Old";
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    document.getElementById("display-title").textContent = "New";
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    document.getElementById("display-title").textContent = "Large";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    document.getElementById("display-title").textContent = "Small";
    displayTemples(temples.filter(t => t.area < 10000));
});

// Initial Display
displayTemples(temples);