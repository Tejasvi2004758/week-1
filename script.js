// Load products
if (location.pathname.includes("products.html")) {
    fetch("data/products.json")
      .then(res => res.json())
      .then(products => {
        const container = document.getElementById("product-list");
        products.forEach(p => {
          const div = document.createElement("div");
          div.className = "product";
          div.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <strong>$${p.price}</strong><br />
            <button onclick="addToCart(${p.id})">Add to Cart</button>
          `;
          container.appendChild(div);
        });
      });
  }
  
  // Add to cart
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }
  
  // Display cart
  if (location.pathname.includes("cart.html")) {
    fetch("data/products.json")
      .then(res => res.json())
      .then(products => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const ul = document.getElementById("cart-items");
        let total = 0;
        cart.forEach(id => {
          const product = products.find(p => p.id === id);
          const li = document.createElement("li");
          li.textContent = ${product.name} - $${product.price};
          ul.appendChild(li);
          total += product.price;
        });
        document.getElementById("total").textContent = Total: $${total};
      });
  }  