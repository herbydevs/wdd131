const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Common Footer Data
  const yearSpan = document.getElementById("year");
  const lastModSpan = document.getElementById("lastModified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModSpan) lastModSpan.textContent = document.lastModified;

  // 2. Form Page Logic (populate select)
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id; // Using ID for value as per instructions
      option.textContent = product.name; // Using name for display
      productSelect.appendChild(option);
    });
  }

  // 3. Review Confirmation Page Logic (localStorage counter)
  const reviewDisplay = document.getElementById("reviewCount");
  if (reviewDisplay) {
    // Increment the counter only when we are on the review.html page
    let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;
    numReviews++;
    localStorage.setItem("numReviews-ls", numReviews);
    reviewDisplay.textContent = numReviews;
  }
});
