// ScrollReveal.js

import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent({ children }) {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(".home__data");
    sr.reveal(".home__img", { delay: 500 });
    sr.reveal(".home__social", { delay: 600 });
    sr.reveal(".about__img, .contact__box", { origin: "left" });
    sr.reveal(".about__data, .contact__form", { origin: "right" });
    sr.reveal(".steps__card, .product__card, .questions__group, .footer", {
      interval: 100,
    });
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {children}

      <a
        href="#"
        className={"scrollup" + (showScroll ? " show-scroll" : "")}
        id="scroll-up"
        onClick={scrollToTop}
      >
        <i class="ri-arrow-up-fill scrollup__icon"></i>
      </a>
    </>
  );
}
