document.addEventListener("DOMContentLoaded", function() {
  const researchPage = document.querySelector(".research-page");
  if (!researchPage) return; // stop if not on that page

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

document.addEventListener("DOMContentLoaded", function() {
  const researchPage = document.querySelector(".research-page2");
  if (!researchPage) return; // stop if not on that page

  researchPage.querySelectorAll(".toggle-abstract").forEach(function(toggle) {
    toggle.textContent = "⏷ Read more"; // initial state

    toggle.addEventListener("click", function() {
      const abstract = toggle.previousElementSibling;

      if (abstract.classList.contains("expanded")) {
        abstract.classList.remove("expanded");
        toggle.textContent = "⏷ Read more";
      } else {
        abstract.classList.add("expanded");
        toggle.textContent = "⏶ Collapse";
      }
    });
  });
});
