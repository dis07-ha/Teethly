
function page1Functionality() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    // Add an event listener to the button
    document.getElementById("getStartedButton").addEventListener("click", function() {
       // Redirect to the next page using JavaScript
       window.location.href = "loginpage.html"; // Replace with your page URL
    });
}

function page2Functionality() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    (function() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        // Function to handle form submission
        function login() {
            // Get the input values
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            // Check if the username and password match
            if (username === "lusiferhobber@gmail.com" && password === "12345") {
                // Redirect to the next page (replace with your page URL)
                window.location.href= "otp.html";
            } else {
                // Display an error message
                alert("Invalid username or password. Please try again.");
            }
        }
        // Add an event listener for the form submission
        document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting
            login(); // Call the login function
        });
    })();
}

function page3Functionality() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        });
   // JavaScript code for handling file uploads, displaying images, and options
   const pictureContainers = document.querySelectorAll('.picture-container');
   const submitButton = document.getElementById('submitButton');
   const cameraOptionButton = document.getElementById('cameraOptionButton');
   const uploadOptionButton = document.getElementById('uploadOptionButton');
   const pictureContainer = document.getElementById('pictureContainer1');
   const pictureContainer2 = document.getElementById('pictureContainer2');
   const pictureContainer3 = document.getElementById('pictureContainer3');
   const pictureContainer4 = document.getElementById('pictureContainer4');
   let uploadedImages = 0;
   pictureContainers.forEach((container, index) => {
       const input = container.querySelector('input[type="file"]');
       const img = container.querySelector(`#uploadedImage${index + 1}`);
       input.addEventListener('change', (event) => {
           const file = event.target.files[0];
           if (file) {
               img.src = URL.createObjectURL(file);
               img.style.display = 'block';
               uploadedImages++;
               if (uploadedImages === 4) {
                   // All four images uploaded, show the submit button
                   submitButton.style.display = 'block';
               }
           }
       });
   });
   // Handle the camera option button click
   cameraOptionButton.addEventListener('click', () => {
       pictureContainer.style.display = 'block';
       pictureContainer2.style.display = 'block';
       pictureContainer3.style.display = 'block';
       pictureContainer4.style.display = 'block';
       progressContainer.style.display = 'block';
       cameraOptionButton.style.display = 'none';
       uploadOptionButton.style.display = 'none';
   });
   // Trigger file input click when the "Upload Images" button is clicked
   uploadOptionButton.addEventListener('click', () => {
       const fileInputs = document.querySelectorAll('input[type="file"]');
       fileInputs.forEach((input) => {
           input.click();
       });
   });

   const patientForm = document.getElementById('patientForm');
   patientForm.addEventListener('submit', (event) => {
       event.preventDefault(); // Prevent the form from actually submitting
       // Retrieve and store patient data in local storage
       const patientData = {
           name: document.getElementById('name').value,
           dob: document.getElementById('dob').value,
           gender: document.getElementById('gender').value,
           mobile: document.getElementById('mobile').value,
          
       };
       localStorage.setItem('patientData', JSON.stringify(patientData));
       // Redirect to the prescription page
       window.location.href = 'prescription.html';
   });
    
}
function page4Functionality(){
    document.addEventListener("DOMContentLoaded", function() {
        // Get references to the span elements
        var uploadedImage1 = document.getElementById("uploadedImage1");
        var uploadedImage2 = document.getElementById("uploadedImage2");
        var uploadedImage3 = document.getElementById("uploadedImage3");
        var uploadedImage4 = document.getElementById("uploadedImage4");

        // Get the uploaded image URLs from the previous page (assuming they are passed as query parameters)
        var urlParams = new URLSearchParams(window.location.search);
        var imageUrl1 = urlParams.get('image1');
        var imageUrl2 = urlParams.get('image2');
        var imageUrl3 = urlParams.get('image3');
        var imageUrl4 = urlParams.get('image4');

    });
    // Generate a unique serial number
function generateSerialNumber() {
    const currentDate = new Date();
    const serialNumber = currentDate.getTime().toString(36).toUpperCase();
    return serialNumber;
}
// Set the serial number in the document
document.getElementById('serialNumber').innerText = generateSerialNumber();
// JavaScript code to populate patient details
const patientNameSpan = document.getElementById('patientName');
const patientDOBSpan = document.getElementById('patientDOB');
const patientGenderSpan = document.getElementById('patientGender');
const patientMobileSpan = document.getElementById('patientMobile');
const downloadButton = document.getElementById('downloadButton');
// Retrieve patient data from local storage
const patientData = JSON.parse(localStorage.getItem('patientData'));
if (patientData) {
    // Populate patient details
    patientNameSpan.textContent = patientData.name;
    patientDOBSpan.textContent = patientData.dob;
    patientGenderSpan.textContent = patientData.gender;
    patientMobileSpan.textContent = patientData.mobile;
}
// Function to generate and download PDF
function generatePDF() {
    const serialNumber = generateSerialNumber();
    const patientName = patientData.name.replace(/\s+/g, '_'); // Replace spaces with underscores
    const fileName = `${serialNumber}_${patientName}_prescription.pdf`;
    const pdf = new jsPDF();
    // Adding content to the PDF
    pdf.text(20, 20, 'Prescription:');
    pdf.text(20, 30, 'This is a system-generated prescription for the patient.');
    // Add image to the PDF after ensuring it's loaded
    const logoImage = document.getElementById('logoImage');
    if (logoImage.complete) {
        const logoDataUrl = getBase64Image(logoImage);
        pdf.addImage(logoDataUrl, 'PNG', 15, 40, 50, 50);
        // Save the PDF with the filename based on serial number and patient's name
        pdf.save(fileName);
    } else {
        logoImage.onload = function () {
            const logoDataUrl = getBase64Image(logoImage);
            pdf.addImage(logoDataUrl, 'PNG', 15, 40, 50, 50);
            // Save the PDF with the filename based on serial number and patient's name
            pdf.save(fileName);
        };
    }
}
// Function to convert image to Base64 data URL
function getBase64Image(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL('image/png');
    return dataURL;
}
// Blocking inspection
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
}


// Check the path of the current page and call the corresponding function
if (window.location.pathname === "/landingpage.html") {
    page1Functionality();
} else if (window.location.pathname === "/loginpage.html") {
    page2Functionality();
}else if (window.location.pathname === "/patientdetails.html") {
    page3Functionality();
} else if (window.location.pathname ==="/prescription.html"){
    page4Functionality();
}