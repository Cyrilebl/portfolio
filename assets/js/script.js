const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const title = observer.observe(document.querySelector(".projects__title"));
const projects = document.querySelectorAll(".project");
projects.forEach((el) => observer.observe(el));

const element = document.querySelector(".type-animation h1:nth-child(2)");

element.addEventListener("animationend", (event) => {
  if (event.animationName === "cursor") {
    setTimeout(() => {
      element.classList.add("cursor-end");
    }, 500);
  }
});
