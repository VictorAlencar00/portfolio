const elements = document.querySelectorAll(".animated_object");
elements.forEach((element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        element.classList.add("shown");
        element.classList.remove("not-shown");
      } else {
        element.classList.add("not-shown");
        element.classList.remove("shown");
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
});
