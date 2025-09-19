document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".toggle-abstract").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const abstract = btn.previousElementSibling; // the <p>
      const arrow = btn.querySelector(".arrow");

      if (abstract.classList.contains("expanded")) {
        abstract.classList.remove("expanded");
        btn.classList.remove("open");
        btn.innerHTML = '<span class="arrow">▶</span> Show more';
      } else {
        abstract.classList.add("expanded");
        btn.classList.add("open");
        btn.innerHTML = '<span class="arrow">▶</span> Show less';
      }
    });
  });
});
