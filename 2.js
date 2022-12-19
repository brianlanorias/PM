let products = {
  data: [
    {
      productName: "Maria Leonora Teresa",
      category: "Fashion",
      price: "Tailor",
      image: "artisan-1.png",
    
    },
    {
      productName: "Ana Marie Chan",
      category: "Fashion",
      price: "Jeweller",
      image: "artisan-2.png",
    },
    {
      productName: "Justin Barbera",
      category: "Fashion",
      price: "Shoemaker",
      image: "artisan-3.png",
    },
    {
      productName: "Coco Dalisay",
      category: "Decor",
      price: "Woodworker",
      image: "artisan-4.png",
    },
    {
      productName: "Josefa Conception",
      category: "Fashion",
      price: "Weaver",
      image: "artisan-5.png",
    },
    {
      productName: "Richard Swift",
      category: "Fashion",
      price: "Bag Maker",
      image: "artisan-6.png",
    },
    {
      productName: "Trinidad Pascua",
      category: "Decor",
      price: "Stained Glass Artist",
      image: "artisan-7.png",
    },
    {
      productName: "Damaso Cuello",
      category: "Decor",
      price: "Blacksmith",
      image: "artisan-8.png",
    },
      {
      productName: "Godye West Jr.",
      category: "Decor",
      price: "Potter",
      image: "artisan-9.png",
    },
    {
      productName: "Ressa Malbago",
      category: "Food",
      price: "Baker",
      image: "artisan-10.png",
    },
    {
      productName: "Luns Natasia Valeria",
      category: "Decor",
      price: "Sculptor",
      image: "artisan-11.png",
    },
    {
      productName: "Natasha Manila",
      category: "Fashion",
      price: "Embroiderer",
      image: "artisan-12.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};

document.element[1]="partner-details.html"

