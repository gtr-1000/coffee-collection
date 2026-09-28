const blends = [
    {
        name: "Aurora",
        origin: "Ethiopia",
        roast: "Light",
        price: 18
    },
    {
        name: "Eclipse",
        origin: "Colombia",
        roast: "Medium",
        price: 22
    },
    {
        name: "Ritual",
        origin: "Yemen",
        roast: "Dark",
        price: 26
    },
    {
    name: "Sunrise",
    origin: "Brazil",
    roast: "Light",
    price: 20
},
    {
    name: "Midnight",
    origin: "Guatemala",
    roast: "Dark",
    price: 28
}
];

// HTML Element References
const button = document.getElementById("show-btn");
const list = document.getElementById("blend-list");
const lightButton = document.getElementById("light-btn");
const mediumButton = document.getElementById("medium-btn");
const darkButton = document.getElementById("dark-btn");

// Reusable function to render any list of blends dynamically
function renderList(listOfBlends) {
  // Clear the list to avoid duplication
  list.innerHTML = "";
  
  listOfBlends.forEach((blend) => {
    const li = document.createElement("li");
    let innerContent = `<h3>${blend.name}</h3>`;

    // Loop through properties dynamically using modern Object.entries
    for (const [key, value] of Object.entries(blend)) {
      if (key !== "name") {
        // Capitalize the first letter of the key (e.g., origin -> Origin)
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        innerContent += `<p>${formattedKey}: ${value}</p>`;
      }
    }

    li.innerHTML = innerContent;
    list.appendChild(li); 
  });
}

// Event Listeners for buttons
button.addEventListener("click", () => {
  renderList(blends); // Shows the complete original list
});

lightButton.addEventListener("click", () => {
  const lightBlends = blends.filter(blend => blend.roast === "Light");
  renderList(lightBlends); // Shows only light roast blends
});

mediumButton.addEventListener("click", () => {
  const mediumBlends = blends.filter(blend => blend.roast === "Medium");
  renderList(mediumBlends); // Shows only medium roast blends
});

darkButton.addEventListener("click", () => {
  const darkBlends = blends.filter(blend => blend.roast === "Dark");
  renderList(darkBlends); // Shows only dark roast blends
});
