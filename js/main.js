// Navigation Bar - Dropdown Menu Icon

function menuDropdown() {
    document.getElementById("dropDown").classList.toggle("show");
}
// Close the menu when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}