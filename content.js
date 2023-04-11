console.log(`%c Extension loaded`, "color: #2196f3");
let nav = document.querySelector("nav");
let floatingCounter = document.createElement("p");

floatingCounter.className = "floating-counter";
nav.append(floatingCounter);

let counter = 0;

let bulkBtn = document.querySelector("#bulk-action");
bulkBtn.addEventListener("click", () => {
  //alert("Bulk action button clicked");
  createCounter();
  findCheckboxes();

  counter = 0;
});

// Function to create the UI elements
function createCounter() {
  // Create the floating element

  floatingCounter.textContent = "Checked: " + counter;
  //console.log("counter", counter);
}

//Find all checkboxes
function findCheckboxes() {
  console.log(`%c found all checkboxes`, "color: green");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        //console.log('checked', checkbox.checked)
        counter++;
        //localStorage.setItem('reviewCounter', counter)
      } else {
        counter--;
        //console.log('unchecked', checkbox.checked)
      }
      createCounter();
    });
  });
}

function getData() {
  let rows = document.querySelectorAll("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("tr-hover");
  }
}
getData();
