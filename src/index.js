document.addEventListener("DOMContentLoaded", function () {
  const ourForm = document.getElementById("our-form");

  const shoppingList = [];
  ourForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log("clicks");
    const itemInput = document.getElementById("item");

    shoppingList.push(itemInput.value.trim());
    //console.log(shoppingList);-> added reset function to form
    ourForm.reset();
    updateShoppingList();
  });
  function updateShoppingList() {
    const listedItems = document.getElementById("list-item");
    listedItems.innerHTML = "";

    shoppingList.forEach((grocery) => {
      const li = document.createElement("li");
      li.textContent = grocery;
      console.log(2);
      listedItems.appendChild(li);
    });
    const deleteItem = document.getElementById("cleared");
    deleteItem.addEventListener("click", function () {
      listedItems.remove();
    });
  }
});
