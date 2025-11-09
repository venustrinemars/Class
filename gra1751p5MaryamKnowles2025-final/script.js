

document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("product");
  const front = stage.querySelector('img[data-view="front"]');
  const back  = stage.querySelector('img[data-view="back"]');
  const swatches = document.querySelectorAll(".swatches a");

  const BASE = "assets/img/";
  const IMAGE_MAP = {
    "black": {
      front: "dress-black-front.png",
      back:  "dress-black-back.png"
    },
    "pink": {         
      front: "dress-pink-front.png",
      back:  "dress-pink-back.png"
    },
    "silver": {
      front: "dress-silver-front.png",
      back:  "dress-silver-back.png"
    }
  };

  // show front on load
  front.classList.add("is-visible");

  // rollover front/back
  stage.addEventListener("mouseenter", () => {
    front.classList.remove("is-visible");
    back.classList.add("is-visible");
  });
  stage.addEventListener("mouseleave", () => {
    back.classList.remove("is-visible");
    front.classList.add("is-visible");
  });

  function swapTo(colorKey) {
    const files = IMAGE_MAP[colorKey];
    if (!files) return;

    
    front.src = BASE + files.front;
    back.src  = BASE + files.back;

    // ensure front is visible after swap
    back.classList.remove("is-visible");
    front.classList.add("is-visible");

    // selection state
    swatches.forEach(a => a.setAttribute("aria-selected", "false"));
    const active = [...swatches].find(a => a.getAttribute("data-color") === colorKey);
    active?.setAttribute("aria-selected", "true");
  }

  // swatch clicks
  swatches.forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      swapTo(a.getAttribute("data-color"));
    });
  });
});
