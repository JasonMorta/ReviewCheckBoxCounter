console.log(`%c Extension loaded`, "color: #2196f3");
let selectAll;
let nav = document.querySelector("nav");
console.log('nav.offsetHeight', nav.offsetHeight)

let floatingCounter = document.createElement("p");
floatingCounter.style.top = nav.offsetHeight + "px";
floatingCounter.className = "floating-counter";
nav.append(floatingCounter);

let counter = 0;

//After clicking the bulk action button, find all checkboxes and add event listeners to them
let bulkBtn = document.querySelector("#bulk-action");
bulkBtn.addEventListener("click", () => {
  //alert("Bulk action button clicked");
  selectAll = document.querySelector("#bulk-action-select-all");
  selectAll.addEventListener("click", () => {
   checkAll()
   createCounter();
  })
  createCounter();
  findCheckboxes();

  counter = 0;
});

// Function to create the UI elements
function createCounter() {
  // Create the floating element

  floatingCounter.textContent = "#: " + counter;
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
        
      } else {
        counter--;
       
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


function checkAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  counter = 0;
  checkboxes.forEach((checkbox) => {
    checkbox.checked && counter++;
  })
 }
