const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const title = observer.observe(document.querySelector(".projects__title"));
const projects = document.querySelectorAll(".grid__project");
projects.forEach((el) => observer.observe(el));
