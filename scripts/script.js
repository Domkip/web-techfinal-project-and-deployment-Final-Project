// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Simple Form Validation (only runs on contact page)
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
