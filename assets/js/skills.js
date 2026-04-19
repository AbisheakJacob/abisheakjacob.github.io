document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const skills = document.querySelectorAll(".skill-chip");
  const count = document.getElementById("skill-count");

  function updateCount() {
    const visible = [...skills].filter(s => s.style.display !== "none");
    count.textContent = visible.length;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      skills.forEach(skill => {
        if (filter === "all" || skill.dataset.category === filter) {
          skill.style.display = "inline-block";
        } else {
          skill.style.display = "none";
        }
      });

      updateCount();
    });
  });

  updateCount();
});