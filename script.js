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
