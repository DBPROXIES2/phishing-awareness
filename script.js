// Open Phishing Example Modal
function openPhishingExample() {
  document.getElementById("phishing-modal").style.display = "block";
}

// Close Phishing Example Modal
function closePhishingExample() {
  document.getElementById("phishing-modal").style.display = "none";
}

// Close modal when user clicks outside the modal
window.onclick = function(event) {
  if (event.target == document.getElementById("phishing-modal")) {
    closePhishingExample();
  }
}
