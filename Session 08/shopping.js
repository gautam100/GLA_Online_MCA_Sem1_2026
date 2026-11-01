function shoping() {
  let prodList = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      description:
        "Comfortable wireless headphones with clear sound and deep bass.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "Electronics",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      description: "A stylish smartwatch for fitness tracking and daily use.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      category: "Accessories",
      rating: 4.2,
      inStock: true,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 1799,
      originalPrice: 2499,
      discount: 28,
      description:
        "Lightweight running shoes designed for comfort and everyday workouts.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      category: "Footwear",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      description:
        "A spacious backpack suitable for college, office, and travel.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      category: "Bags",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 15999,
      originalPrice: 18999,
      discount: 16,
      description: "Capture memorable moments with a compact digital camera.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      category: "Electronics",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      description: "Modern sunglasses with a stylish frame for everyday wear.",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      category: "Fashion",
      rating: 4.1,
      inStock: true,
    },
    {
      id: 7,
      name: "Coffee Maker",
      price: 3499,
      originalPrice: 4499,
      discount: 22,
      description:
        "Prepare fresh coffee at home with this easy-to-use coffee maker.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
      category: "Home Appliances",
      rating: 4.4,
      inStock: false,
    },
  ];

  let card = "";
  for (let prod of prodList) {
    card += `<div class="card" style="width: 18rem; float:left; margin:10px;">
                <img src="${prod.image}" class="card-img-top" width="" height="190" />
                <div class="card-body">
              <h5 class="card-title">${prod.name}</h5>
              <p class="card-text">
                <mark>&#8377; ${prod.price}</mark>
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
          </div>`;
  }
  document.getElementById("card_container").innerHTML = card;
}
