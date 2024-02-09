const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    if(window.innerWidth <= 568) {
      this.classList.toggle("collapsible--expanded");
    } else {
      this.classList.remove(".collapsible");
    }  
  })
);