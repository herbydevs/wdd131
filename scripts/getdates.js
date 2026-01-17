const copyrightSpan = document.getElementById("copyright");
const lastModifiedP = document.getElementById("last-modified");

const currentYear = new Date().getFullYear();
copyrightSpan.textContent = `© ${currentYear} Adafa Ralph • Saint Vincent and the Grenadines`;

const lastModified = new Date(document.lastModified);
lastModifiedP.textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
