document.addEventListener("DOMContentLoaded", function () {
  const accordionRows = document.querySelectorAll(".accordion-row");

  accordionRows.forEach((row) => {
    row.addEventListener("click", function () {
      const accordionId = this.getAttribute("data-accordion");
      const contentRows = document.querySelectorAll(
        `.accordion-content[data-content="${accordionId}"]`
      );

      this.classList.toggle("expanded");

      contentRows.forEach((contentRow) => {
        contentRow.classList.toggle("show");
      });
    });
  });

  const accordionMobItems = document.querySelectorAll("[data-mob-accordion]");

  if(accordionMobItems.length > 0) {
    accordionMobItems.forEach(item => {
      item.addEventListener("click", function () {
        this.classList.toggle("expanded");
        this.nextElementSibling.classList.toggle("show");
      });
    })  
  }
});
