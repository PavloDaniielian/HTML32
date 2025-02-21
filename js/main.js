// document.querySelectorAll('.section0-col-img1-container').forEach(container => {
//   const img = container.querySelector('img'); // Find the <img> inside the container
//   const originalSrc = img.src; // Store the original image src

//   container.addEventListener('mouseenter', () => {
//     img.src = 'assets/images/page1/section0_tab_highlight.svg'; // Change to hover image
//   });

//   container.addEventListener('mouseleave', () => {
//     img.src = originalSrc; // Revert back to original image on mouse leave
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Select all .section0-col-link elements
  const links = document.querySelectorAll(".section0-col-link");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior

          // Remove 'active' class from all .section0-col-box elements
          document.querySelectorAll(".section0-col-box").forEach(box => {
              box.classList.remove("active");
          });

          // Add 'active' class to the clicked element's .section0-col-box
          const box = this.querySelector(".section0-col-box");
          if (box) {
              box.classList.add("active");
          }
      });
  });
});
