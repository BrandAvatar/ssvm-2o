// GSAP Gallery Animation
globalThis.initGalleryAnimation = function() {
  // GSAP and ScrollTrigger should be available from the imported packages
  // No need to register plugins here as they're already registered in the component
  const $container = $(".gallery");
  const $items = $(".cards");

  let maxWidth, maxHeight;

  const getMaxWidthHeight = function() {
    maxWidth = $items.width() - window.innerWidth;
    maxHeight = $items.height();
  };
  getMaxWidthHeight();

  ScrollTrigger.addEventListener("refreshInit", getMaxWidthHeight);

  // Create the main timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: $container,
      pin: true,
      start: "top top",
      end: () => "+=" + maxWidth,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Ensure videos are always interactive
        $(".cards iframe").css("pointer-events", "auto");
      }
    }
  })
  .to($items, {
    x: () => -maxWidth,
    ease: "none"
  });

  // Make sure videos are clickable
  $(".cards iframe").css("pointer-events", "auto");
};