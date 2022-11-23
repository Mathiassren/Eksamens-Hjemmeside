let largeImage = document.querySelector("#gallery-large");

const smallImages = document.querySelectorAll(
  ".gallery-grid img:not(#gallery-large)"
);

for (let index = 0; index < smallImages.length; index++) {
  smallImages[index].addEventListener("click", (e) => {
    largeImage.src = e.target.src;
  });
}

/*Accordion open/close*/

const btns = document.querySelectorAll(".faq-header button");

for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener("click", (e) => {
    let section = e.target.parentNode.parentNode;
    section.classList.toggle("active");
  });
}

/*form Validering*/
