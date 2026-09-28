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
    }
];

const button = document.getElementById("show-btn");

const list = document.getElementById("blend-list");

button.addEventListener("click", () => {
  
  list.innerHTML = "";
  
  blends.forEach((blend) => {
  const li = document.createElement("li");
  const title = document.createElement("h3");
  const origin = document.createElement("p");
  const roast = document.createElement("p");
  const price = document.createElement("p");

  title.textContent = blend.name;
  origin.textContent = "Origin: " + blend.origin;
  roast.textContent = "Roast: "  + blend.roast;
  price.textContent = "Price: " + blend.price;

  li.appendChild(title);
  li.appendChild(origin);
  li.appendChild(roast);
  li.appendChild(price);
   
  list.appendChild(li); 
   
});
  
});
