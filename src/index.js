document.addEventListener("DOMContentLoaded", function () {
  const ourForm = document.getElementById("our-form");
  const markPurchased = document.getElementById("bought");
  const deleteItem = document.getElementById("cleared");
  let shoppingList = [];

  // Initialize event listeners once
  markPurchased.addEventListener("click", function () {
    // purchased state for ALL items set to true
    shoppingList.forEach((item) => (item.purchased = true));
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
      id: Date.now(), //makes a unique ID, unless items are entered at the same ms
      name: itemName,
      purchased: false, // Initialize as not purchased/New items start as unmarked
    });

    ourForm.reset(); // resets the form
    updateShoppingList();
  });

  function updateShoppingList() {
    const unorderedList = document.getElementById("list-item");
    unorderedList.innerHTML = ""; // a JavaScript statement that clears all the existing content
    //  inside the #list-item element (which is likely a <ul> or <ol> list)

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
      unorderedList.appendChild(li);
    });
  }
});
