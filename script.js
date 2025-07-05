const products = [
    {
      name: "Red Dress",
      price: "$200.00",
      image: "14.webp",
      rating: 4,
      variants: [
        { color: "Red", extraPrice: "$0" },
        { color: "Blue", extraPrice: "$50" }
      ]
    },
    {
      name: "Blue Black Dress",
      price: "$150.00",
      image: "15.webp",
      rating: 3,
      variants: [
        { color: "Black", extraPrice: "$0" },
        { color: "Gray", extraPrice: "$30" }
      ]
    },
    {
      name: "Brown Dress",
      price: "$250.00",
      image: "16.webp",
      rating: 5,
      variants: [
        { color: "White", extraPrice: "$0" },
        { color: "Red", extraPrice: "$20" }
      ]
    }
  ];
  
    const productContainer = document.getElementById("product-container");
    products.forEach((element) =>{
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-3");
        const card = document.createElement("div")
        card.classList.add("card")
        const img = document.createElement("img");
        const productName = document.createElement("h5");
        const pprice = document.createElement("P");
        const startDiv = document.createElement("div");
        const btn = document.createElement("button");


        console.log(element.image);
        img.src = element.image;
        img.classList.add("card-img-top");
        card.appendChild(img);

        productName.textContent = element.name
        productName.classList.add("product-Name");
        card.appendChild(productName);

        pprice.textContent = element.price;
        pprice.classList.add("p-price");
        card.appendChild(pprice);

        for (let i=0; i <element.rating;i++){
            const star = document.createElement("i");
            star.classList.add("fa","fa-star","checked");
            startDiv.appendChild(star);
        }
        card.appendChild(startDiv);

        btn.textContent= "Add to cart";
        btn.classList.add("btn-button")
        card.appendChild(btn);

        colDiv.appendChild(card);
        productContainer.appendChild(colDiv);

    
  })
  

