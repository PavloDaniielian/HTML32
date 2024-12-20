window.addEventListener('load', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#scroll-container"),
    smooth: true,
    multiplier: 1.2, // Adjust scroll speed
    lerp: 0.1, // Easing
  });

  // Debugging (optional)
  scroll.on("scroll", (position) => {
    console.log("Current Scroll Position:", position.scroll.y);
  });
})