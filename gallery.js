for(const element of document.querySelectorAll(".other_cosmetic")) {
  element.addEventListener("click", event => {
    if(event.target.classList.contains("other_cosmetic")) {
      for(const query of document.querySelectorAll(".other_cosmetic")) {
        query.classList.remove("active");
      }
      event.target.classList.add("active");
    }
  })
}