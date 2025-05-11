function goToSite() {
  var select = document.getElementById("siteSelect");
  var url = select.value;

  if (url) { // Only redirect if a valid option is selected
    window.location.href = url;
  } else {
    alert("Please select a website first!");
  }
}




const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const mySelect = document.getElementById('mySelect');
const specialInputDiv = document.getElementById('specialInputDiv');




radio1.addEventListener('click', function() {
  mySelect.selectedIndex = 0;
    // Button states
  button1.disabled = false;
  button2.disabled = true;

  // Select options: Enable only the first option
  for (let i = 0; i < mySelect.options.length; i++) {
    mySelect.options[i].disabled = (i !== 3); // Only index 3 is enabled
  }

  // Hide special input
  specialInputDiv.style.display = 'none';
});

radio2.addEventListener('click', function() {
 mySelect.selectedIndex = 0;
 
    // Button states
  button1.disabled = true;
  button2.disabled = false;

  // Select options: Enable all
  for (let i = 0; i < mySelect.options.length; i++) {
    mySelect.options[i].disabled = false;
  }

  // Show special input
  specialInputDiv.style.display = 'block';
});




const inputFields = document.getElementById('inputFields');
const radios = document.querySelectorAll('input[name="options"]');

function renderInputs(option) {
  if (option === 'option1') {
    inputFields.innerHTML = `
    <div class="hidden-input" style="display: grid; grid-template-columns: auto; padding: 0rem 5rem 0rem 5rem; margin: 0.2rem 0rem 0.2rem 0rem; width:100%;">
  <label for="text">Debit/Credit Card Number</label>
    <input type="text" class="form-control" placeholder="Input Card Number">
  </div>

<div class="mt-4">
    <div class="baseball" style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 5rem; padding: 1rem 5rem 1rem 5rem">
        <div>
<label for="text">Expiry Date</label>
        <input type="text" class="form-control" placeholder="MM / YY">
        </div>
        
        <div>
            <label for="text">CVV Code</label>
    <input type="text" class="form-control" placeholder="CVV">
        </div>
        
  </div>
</div>

    <div class="pick" style="display:grid;grid-template-columns: auto; padding:1rem 5rem 2rem 5rem; width:100%;" >
      <label for="text" style="padding-bottom: 0.5rem;">State</label>
      <select id="mySelect" class="form-select" aria-label="Default select example">
  <option selected>Select State</option>
</select>
</div>
       <div class="hidden-input" style="display: grid; grid-template-columns: 1fr; padding: 0rem 5rem 0rem 5rem; margin: 0.2rem 0rem 0.2rem 0rem; width:100%;">
  <label for="text" style="padding-bottom: 0.5rem;">City</label>
    <input type="text" class="form-control" placeholder="Enter City">
  </div>

         `;
  } else if (option === 'option2') {
    inputFields.innerHTML = `
      <div class="pick" style="display:grid;grid-template-columns: auto; padding:1rem 5rem 2rem 5rem; width:100%;" >
      <label for="text" style="padding-bottom: 0.5rem;">Bank Name</label>
      <select id="mySelect" class="form-select" aria-label="Default select example">
  <option selected>Select Bank</option>
</select>
</div>


   <div class="hidden-input" style="display: grid; grid-template-columns: 1fr; padding: 0rem 5rem 0rem 5rem; margin: 0.2rem 0rem 0.2rem 0rem; width:100%;">
  <label for="text">Account Number</label>
    <input type="text" class="form-control" placeholder="Input Card Number">
  </div>
`;
  }
}

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    renderInputs(this.value);
  });
});

// Initialize default fields
renderInputs('option1');










// Initialize the toast using Bootstrap's Toast class
const toastElement = document.getElementById('centerToast');
const bootstrapToast = new bootstrap.Toast(toastElement);

// Button that shows the toast
document.getElementById('showToastBtn').addEventListener('click', function () {
  bootstrapToast.show();
});

// Button inside the toast to close it
document.getElementById('getStartedBtn').addEventListener('click', function () {
  bootstrapToast.hide();
});
