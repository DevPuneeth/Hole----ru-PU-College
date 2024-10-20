function toggleMenu() {
  var menu = document.getElementById("navMenu");
  var backdrop = document.getElementById("backdrop");
  var body = document.body;
  
  // Toggle 'change' class on the menu button
  document.querySelector(".container").classList.toggle("change");
  
  // Toggle 'show' class on the menu
  menu.classList.toggle("show");
  
  // Toggle backdrop visibility
  backdrop.style.display = menu.classList.contains("show") ? "block" : "none";
  
  // Toggle 'menu-open' class on the body
  body.classList.toggle("menu-open");
  
  // Prevent scrolling on the main page when the menu is open
  if (body.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}
