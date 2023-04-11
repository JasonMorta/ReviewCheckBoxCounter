let nav = document.querySelector("nav")
// let inputField2 = document.createElement("input");
let bulkBtn = document.querySelector("#bulk-action")
bulkBtn.addEventListener('click', () => {
  alert("Bulk action button clicked")
  createCounter()
})

// Function to create the UI elements
function createCounter() {
  // Create the floating element
  const floatingCounter = document.createElement("p");
  floatingCounter.textContent = "Checked: 0"
  floatingCounter.className ="floating-counter"
  nav.prepend(floatingCounter);

}
