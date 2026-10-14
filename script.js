
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

// 1. HTML Element References
const button = document.getElementById("show-btn");
const list = document.getElementById("blend-list");
const lightButton = document.getElementById("light-btn");
const mediumButton = document.getElementById("medium-btn");
const darkButton = document.getElementById("dark-btn");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

// 2. State: currently selected roast and sort
let currentRoast = "All";
let currentSort = "default";

// 3. Render the list of blends
function renderList(listOfBlends) {
  list.innerHTML = "";

  listOfBlends.forEach((blend) => {
    const li = document.createElement("li");
    let innerContent = `<h3>${blend.name}</h3>`;

    for (const [key, value] of Object.entries(blend)) {
      if (key !== "name") {
        const formattedKey =
          key.charAt(0).toUpperCase() + key.slice(1);

        innerContent += `<p>${formattedKey}: ${value}</p>`;
      }
    }

    li.innerHTML = innerContent;
    list.appendChild(li);
  });
}

// 4. Filter and search the collection together
function updateCollection() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredBlends = blends.filter((blend) => {
    const matchesRoast =
      currentRoast === "All" || blend.roast === currentRoast;

    const matchesName =
      blend.name.toLowerCase().includes(searchTerm);

    return matchesRoast && matchesName;
  });

  // Create a copy so the original array stays unchanged
  const sortedBlends = [...filteredBlends];

  // Sort the copy according to the selected option
  if (currentSort === "asc") {
    sortedBlends.sort((a, b) => a.price - b.price);
  } else if (currentSort === "desc") {
    sortedBlends.sort((a, b) => b.price - a.price);
  }

  renderList(sortedBlends);

  if (sortedBlends.length === 0) {
    const message = document.createElement("li");

    message.textContent =
      "No blends found. Try changing your search or clearing the roast filter.";

    list.appendChild(message);
  }
}

// 5. Event listeners

// Show the entire collection and reset the roast filter
button.addEventListener("click", () => {
  currentRoast = "All";
  updateCollection();
});

// Filter by light roast
lightButton.addEventListener("click", () => {
  currentRoast = "Light";
  updateCollection();
});

// Filter by medium roast
mediumButton.addEventListener("click", () => {
  currentRoast = "Medium";
  updateCollection();
});

// Filter by dark roast
darkButton.addEventListener("click", () => {
  currentRoast = "Dark";
  updateCollection();
});

// Search in real time as the user types
searchInput.addEventListener("input", () => {
  updateCollection();
});

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  updateCollection();
});
