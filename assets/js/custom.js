document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".toggle-abstract").forEach(function(toggle) {
    toggle.addEventListener("click", function() {
      const abstract = toggle.previousElementSibling;

      if (abstract.classList.contains("expanded")) {
        abstract.classList.remove("expanded");
        toggle.classList.remove("open");
      } else {
        abstract.classList.add("expanded");
        toggle.classList.add("open");
      }
    });
  });
});
