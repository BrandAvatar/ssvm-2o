"use client";

import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";

const useGSAPAnimations = () => {
  const pathname = usePathname();

  useGSAP(() => {
    if (typeof window === "undefined") return;

    // Register plugins
    if (!gsap.registerPlugin) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
    gsap.config({ nullTargetWarn: false });

    const initAwardItemCursor = () => {
      const awardItems = document.querySelectorAll(".award__item");
      const imgCursorSelector = ".img-cursor";

      awardItems.forEach((el) => {
        const image = el.querySelector(imgCursorSelector);

        if (!image) return;
        gsap.set(image, { xPercent: -50, yPercent: -50 });

        const setX = gsap.quickSetter(image, "x", "px");
        const setY = gsap.quickSetter(image, "y", "px");

        const align = (e) => {
          setX(e.clientX);
          setY(e.clientY);
        };

        const startFollow = () => document.addEventListener("mousemove", align);
        const stopFollow = () =>
          document.removeEventListener("mousemove", align);

        const fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow,
        });

        el.addEventListener("mouseenter", (e) => {
          fade.play();
          startFollow();
          align(e);
        });

        el.addEventListener("mouseleave", () => {
          fade.reverse();
          stopFollow();
        });

        return () => {
          el.removeEventListener("mouseenter", (e) => {
            fade.play();
            startFollow();
            align(e);
          });
          el.removeEventListener("mouseleave", () => {
            fade.reverse();
            stopFollow();
          });
        };
      });
    };

    const initPortfolioCursorAnimation = () => {
      const portfolioItems = document.querySelectorAll(".portfolio__item");
      const linkCursorSelector = ".link-cursor";

      portfolioItems.forEach((el) => {
        const image = el.querySelector(linkCursorSelector);

        if (!image) return;

        const href = image.getAttribute("href");

        gsap.set(image, {
          yPercent: -50,
          xPercent: -50,
          pointerEvents: "none",
        });

        const setX = gsap.quickSetter(image, "x", "px");
        const setY = gsap.quickSetter(image, "y", "px");

        const align = (e) => {
          setX(e.clientX);
          setY(e.clientY);
        };

        const startFollow = () => document.addEventListener("mousemove", align);
        const stopFollow = () =>
          document.removeEventListener("mousemove", align);

        const fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow,
        });

        el.addEventListener("mouseenter", (e) => {
          fade.play();
          startFollow();
          align(e);
        });

        el.addEventListener("mouseleave", () => {
          fade.reverse();
          stopFollow();
        });

        if (href) {
          el.addEventListener("click", () => {
            window.location.href = href;
          });
        }
      });
    };

    const initFadeAnimations = () => {
      const fadeBottomElements = document.querySelectorAll(".fade_bottom");

      fadeBottomElements.forEach((item) => {
        gsap.set(item, { y: 100, opacity: 0 });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=400",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
        });
      });

      const fadeLeftElements = document.querySelectorAll(".fade_left");
      fadeLeftElements.forEach((item) => {
        gsap.set(item, { x: -100, opacity: 0 });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2.5,
        });
      });

      const fadeRightElements = document.querySelectorAll(".fade_right");
      fadeRightElements.forEach((item) => {
        gsap.set(item, { x: 100, opacity: 0 });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2.5,
        });
      });
    };

    const initImageReveal = () => {
      const revealContainers = document.querySelectorAll(".reveal");
      revealContainers.forEach((container) => {
        const image = container.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
          },
        });

        tl.set(container, { autoAlpha: 1 });

        if (container.classList.contains("zoom-out") && image) {
          tl.from(image, {
            duration: 2,
            scale: 1.4,
            ease: "power2.out",
            delay: 1,
          });
        } else if (container.classList.contains("left")) {
          const xPercent = -100;
          tl.from(container, {
            xPercent,
            duration: 2.5,
            ease: "power2.out",
          });
          tl.from(image, {
            xPercent: -xPercent,
            scale: 1,
            duration: 2.5,
            delay: -2.5,
            ease: "power2.out",
          });
        } else if (container.classList.contains("right")) {
          const xPercent = 100;
          tl.from(container, {
            xPercent,
            duration: 2.5,
            ease: "power2.out",
          });
          tl.from(image, {
            xPercent: xPercent,
            scale: 1,
            duration: 2.5,
            delay: -2.5,
            ease: "power2.out",
          });
        } else if (container.classList.contains("bottom")) {
          const yPercent = 100;
          tl.from(container, {
            yPercent,
            duration: 2.5,
            ease: Power2.out,
          });
          tl.from(image, {
            yPercent: -yPercent,
            duration: 2.5,
            scale: 1,
            delay: -2.5,
            ease: Power2.out,
          });
        }
      });
    };

    const initImageMovement = () => {
      const elements = document.querySelectorAll(".img-movement");

      if (elements.length > 0) {
        elements.forEach((element) => {
          element.addEventListener("mouseenter", (event) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const bgX = (x / rect.width) * 80 - 40;
            const bgY = (y / rect.height) * 80 - 40;

            gsap.to(element, {
              duration: 0.6,
              ease: "power2.out",
              backgroundPosition: `${bgX}px ${bgY}px`,
            });
          });

          element.addEventListener("mousemove", (event) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const bgX = (x / rect.width) * 400 - 200;
            const bgY = (y / rect.height) * 400 - 200;

            gsap.to(element, {
              duration: 0.3,
              backgroundPosition: `${bgX}px ${bgY}px`,
            });
          });

          // On mouse leave
          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              duration: 1,
              ease: "power2.inOut",
              backgroundPosition: "center",
            });
          });
        });
      }
    };

    const initTextMovement = () => {
      const textLeft = document.querySelectorAll(".text-left");
      const textRight = document.querySelectorAll(".text-right");

      if (textLeft.length > 0 && textRight.length > 0) {
        gsap.set(textLeft, { x: 0 });
        gsap.set(textRight, { x: 0 });

        ScrollTrigger.matchMedia({
          "(min-width:1400px)": () => {
            gsap.to(textLeft, {
              x: -200,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 30%",
                end: "bottom 30%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });

            gsap.to(textRight, {
              x: 200,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 30%",
                end: "bottom 30%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });
          },

          "(min-width:1200px) and (max-width:1399px)": () => {
            gsap.to(textLeft, {
              x: -200,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });

            gsap.to(textRight, {
              x: 200,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top center",
                end: "bottom center",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });
          },
          "(min-width:992px) and (max-width:1199px)": () => {
            gsap.to(textLeft, {
              x: -100,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 25%",
                end: "bottom 60%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });

            gsap.to(textRight, {
              x: 100,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 25%",
                end: "bottom 60%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });
          },
          // For screens up to 991px
          "(max-width: 991px)": () => {
            gsap.to(textLeft, {
              x: -100, // Smaller animation distance
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 18%",
                end: "bottom 47%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });

            gsap.to(textRight, {
              x: 100,
              scrollTrigger: {
                trigger: ".hero-title",
                start: "top 18%",
                end: "bottom 47%",
                scrub: 1,
                toggleActions: "play reverse play reverse",
                markers: false,
              },
            });
          },
        });
      }
    };

    const initSplitText = () => {
      const splitTextElements = document.querySelectorAll(".split-text");
      splitTextElements.forEach((el) => {
        const split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line",
        });

        gsap.set(el, { perspective: 400 });

        if (el.classList.contains("right")) {
          gsap.set(split.chars, { opacity: 0, x: "50", ease: "back.out" });
        } else if (el.classList.contains("left")) {
          gsap.set(split.chars, { opacity: 0, x: "-50", ease: "circ.out" });
        } else if (el.classList.contains("up")) {
          gsap.set(split.chars, { opacity: 0, y: "80", ease: "circ.out" });
        } else if (el.classList.contains("down")) {
          gsap.set(split.chars, { opacity: 0, y: "-80", ease: "circ.out" });
        }

        gsap.to(split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          x: "0",
          y: "0",
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });
    };

    const initBrandAnimations = () => {
      const brandItems = document.querySelectorAll(".item-stagger");
      if (!brandItems.length) return;

      const itemsByRow = Array.from(brandItems).reduce((acc, item) => {
        const offsetTop = item.offsetTop;
        if (!acc[offsetTop]) acc[offsetTop] = [];
        acc[offsetTop].push(item);
        return acc;
      }, {});

      Object.values(itemsByRow).forEach((rowItems) => {
        gsap.set(rowItems, { opacity: 0, y: 50 });
        gsap.to(rowItems, {
          scrollTrigger: {
            trigger: rowItems[0],
            start: "top bottom",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: { amount: 1, from: "start" },
          ease: "power2.out",
        });
      });
    };

    const initTitleStretch = () => {
      const titleElements = document.querySelectorAll(".title-stretch");

      titleElements.forEach((title) => {
        const text = title.textContent.trim();
        const chars = [...text];

        const isMiddleSpace = (index) => {
          return chars[index] === " " && index > 0 && index < chars.length - 1;
        };

        title.innerHTML = chars
          .map((letter, index) => {
            if (letter === " ") {
              return `<span class="letter ${
                isMiddleSpace(index) ? "middle-space space" : "space"
              }">&nbsp;</span>`;
            }
            return `<span class="letter">${letter}</span>`;
          })
          .join("");

        const stretchDirection = title.dataset.stretch;
        const letters = gsap.utils.toArray(".letter", title);

        letters.forEach((letter) => {
          const hoverIn = () => {
            if (
              !letter.classList.contains("space") ||
              letter.classList.contains("middle-space")
            ) {
              if (
                stretchDirection === "stretch-up" ||
                stretchDirection === "stretch-down"
              ) {
                gsap.to(letter, {
                  scaleY: 1.4,
                  duration: 0.2,
                  ease: "power4.out",
                });
              } else {
                gsap.to(letter, {
                  scaleX: 1.4,
                  scaleY: 1.4,
                  duration: 0.2,
                  ease: "power4.out",
                });
              }
            }
          };

          const hoverOut = () => {
            gsap.to(letter, {
              scaleX: 1,
              scaleY: 1,
              duration: 0.2,
              ease: "power4.in",
            });
          };

          if (
            !letter.classList.contains("space") ||
            letter.classList.contains("middle-space")
          ) {
            letter.addEventListener("mouseenter", hoverIn);
            letter.addEventListener("mouseleave", hoverOut);
          }
        });
      });
    };

    const initItemPopupAnimation = () => {
      const items = document.querySelectorAll(".item-popup");

      if (items.length > 0) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.15,
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                toggleActions: "play none none none",
                markers: false,
              },
            }
          );
        });
      }
    };

    const initBlogLinkIcon = () => {
      const blogThumbs = document.querySelectorAll(".blog-thumb");

      blogThumbs.forEach((blogThumb) => {
        const hoverArrow = blogThumb.querySelector(".hover-arrow");
        const image = blogThumb.querySelector("img");

        const config = {
          mouseEnterDuration: 0.1,
          mouseMoveDuration: 0.1,
          mouseLeaveEase: "none",
          mouseMoveEase: "none",
        };

        blogThumb.addEventListener("mouseenter", () => {
          gsap.to(hoverArrow, {
            opacity: 1,
            scale: 1,
            duration: config.mouseEnterDuration,
            ease: "power1.out",
          });

          gsap.to(image, {
            scale: 1.05,
            duration: 0.4,
            ease: "power1.inOut",
          });
        });

        blogThumb.addEventListener("mousemove", (e) => {
          const rect = blogThumb.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(hoverArrow, {
            x: x,
            y: y,
            duration: config.mouseMoveDuration,
            ease: config.mouseMoveEase,
          });
        });

        blogThumb.addEventListener("mouseleave", () => {
          gsap.to(hoverArrow, {
            opacity: 0,
            scale: 0.5,
            duration: 0,
            ease: config.mouseLeaveEase,
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power1.inOut",
          });
        });
      });
    };

    const initScrollTriggerPinning = () => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          const contentScrolls = gsap.utils.toArray(".content-scroll");
          const piningAreas = gsap.utils.toArray(".pining-area");
          const contentPinings = gsap.utils.toArray(".content-pining");

          if (
            contentScrolls.length &&
            piningAreas.length &&
            contentPinings.length
          ) {
            contentScrolls.forEach((contentScroll, index) => {
              const piningArea = piningAreas[index];
              const contentPining = contentPinings[index];

              if (piningArea && contentPining) {
                gsap.to(contentScroll, {
                  scrollTrigger: {
                    trigger: piningArea,
                    start: "top -60",
                    end: "bottom bottom",
                    pin: contentPining,
                    scrub: true,
                    markers: false,
                  },
                });
              }
            });
          }
        },
      });
    };

    const initHeroAnimations = () => {
      const spans = document.querySelectorAll(
        ".hero-developer__title span, .hero-ai-title span"
      );
      const developer__thumb = document.querySelectorAll(
        ".hero-developer__thumb img"
      );
      const headerArea = document.querySelectorAll(".header-area");
      const bornLocation = document.querySelectorAll(".born-location");
      const scrollDown = document.querySelectorAll(".scroll-down");

      const tl = gsap.timeline();

      tl.from(
        spans[0],
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        },
        0.3
      ).from(
        spans[1],
        {
          x: "100%",
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        },
        0.3
      );

      tl.from(
        developer__thumb,
        {
          y: "100%",
          opacity: 0,
          delay: 1,
          duration: 1.5,
          ease: "power4.out",
        },
        0
      );

      tl.from(
        headerArea,
        {
          y: "-100%",
          opacity: 0,
          delay: 0.5,
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );

      tl.from(
        bornLocation,
        {
          x: "-100%",
          opacity: 0,
          delay: 1.3,
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );

      tl.from(
        scrollDown,
        {
          x: "100%",
          opacity: 0,
          delay: 1.3,
          duration: 0.5,
          ease: "power1.out",
        },
        0
      );
    };
    const initBlogTitleEffect = () => {
      const blogTitles = document.querySelectorAll(".blog-title");

      if (blogTitles.length > 0) {
        blogTitles.forEach((title) => {
          gsap.from(title, {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          });
        });
      }
    };

    const initVideoAreaAnimation = () => {
      if (window.innerWidth >= 992) {
        const videoArea = document.querySelectorAll(".video-area");

        if (videoArea.length > 0) {
          videoArea.forEach((contentArea) => {
            gsap.set(contentArea, { xPercent: -80 });

            gsap.to(contentArea, {
              xPercent: 0,
              scrollTrigger: {
                trigger: contentArea,
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                markers: false,
              },
            });
          });
        }
      }
    };

    const initScrollToLinks = () => {
      const jumpLinks = document.querySelectorAll(".section-link");
      const header = document.querySelector("header");

      if (jumpLinks && jumpLinks.length > 0) {
        jumpLinks.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetID = this.getAttribute("href");
            const targetSection = document.querySelector(targetID);

            if (targetSection) {
              const headerHeight = header ? header.offsetHeight : 0;
              const targetPosition = targetSection.offsetTop - headerHeight;

              gsap.to(window, {
                duration: 1,
                scrollTo: targetPosition,
              });
            } else {
              console.error(`Section with ID ${targetID} does not exist.`);
            }
          });
        });
      }
    };

    const initButtonHoverAnimations = () => {
      // Button hover effect with span positioning
      const buttons = document.querySelectorAll(".btn-hover");

      buttons.forEach((button) => {
        const span = button.querySelector("span");

        if (!span) return;

        const handleMouseMove = (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(span, {
            top: y,
            left: x,
            duration: 0,
          });
        };

        button.addEventListener("mouseenter", handleMouseMove);
        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseout", handleMouseMove);
      });

      // Button parallax effect
      const allButtons =
        gsap.utils.toArray(".btn-hover").length > 0
          ? gsap.utils.toArray(".btn-hover")
          : gsap.utils.toArray("#btn-hover");

      const allButtonCircles = gsap.utils.toArray(".btn-item");

      allButtons.forEach((btn, index) => {
        const handleParallax = (e) => {
          const rect = btn.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          gsap.to(allButtonCircles[index], {
            duration: 0.5,
            x: ((relX - centerX) / rect.width) * 180,
            y: ((relY - centerY) / rect.height) * 180,
            ease: Power2.easeOut,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(allButtonCircles[index], {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: Power2.easeOut,
          });
        };

        btn.addEventListener("mousemove", handleParallax);
        btn.addEventListener("mouseleave", handleMouseLeave);
      });
    };
    const initAllAnimations = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
      initAwardItemCursor();
      initPortfolioCursorAnimation();
      initFadeAnimations();
      initImageReveal();
      initImageMovement();
      initTextMovement();
      initSplitText();
      initBrandAnimations();
      initTitleStretch();
      initItemPopupAnimation();
      initBlogLinkIcon();
      initScrollTriggerPinning();
      initHeroAnimations();
      initBlogTitleEffect();
      initVideoAreaAnimation();
      initScrollToLinks();
      initButtonHoverAnimations();
    };

    initAllAnimations();

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, [pathname]);
};

export default useGSAPAnimations;
