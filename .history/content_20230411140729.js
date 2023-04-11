let nav = document.querySelector("nav")
let counter = 0
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
  floatingCounter.textContent = "Checked: "+counter
  floatingCounter.className ="floating-counter"
  nav.prepend(floatingCounter);

  console.log('counter', counter)

  if (counter === 0) {
    findCheckboxes()
  }
}

//Find all checkboxes
function findCheckboxes() {
  console.log(`%c find checkboxes`, 'color: green')
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
checkbox.addEventListener('click', () => {

  if (checkbox.checked) {
    counter++;
    console.log('counter', counter)
  }

})
  })

}
