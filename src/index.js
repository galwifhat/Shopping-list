document.addEventListener("DOMContentLoaded", function () {
  const ourForm = document.getElementById("our-form");
  const markPurchased = document.getElementById("bought");
  const deleteItem = document.getElementById("cleared");
  let shoppingList = [];

  // Initialize event listeners once
  markPurchased.addEventListener("click", function () {
    // Toggle purchased state for ALL items
    shoppingList.forEach((item) => (item.purchased = !item.purchased));
    updateShoppingList();
  });

  deleteItem.addEventListener("click", function () {
    shoppingList = [];
    updateShoppingList();
  });

  ourForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const itemInput = document.getElementById("item");
    const itemName = itemInput.value.trim();

    if (!itemName) {
      alert("Please enter a valid item.");
      return;
    }

    shoppingList.push({
      id: Date.now(),
      name: itemName,
      purchased: false, // Initialize as not purchased
    });

    ourForm.reset();
    updateShoppingList();
  });

  function updateShoppingList() {
    const listedItems = document.getElementById("list-item");
    listedItems.innerHTML = "";

    shoppingList.forEach((grocery) => {
      const li = document.createElement("li");
      li.dataset.id = grocery.id;
      li.textContent = grocery.name;

      // Apply strikethrough style based on the item's purchased state
      if (grocery.purchased) {
        li.style.textDecoration = "line-through";
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove";
      deleteButton.addEventListener("click", () => {
        shoppingList = shoppingList.filter((item) => item.id !== grocery.id);
        updateShoppingList();
      });

      li.appendChild(deleteButton);
      listedItems.appendChild(li);
    });
  }
});
