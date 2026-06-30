import { useEffect } from "react";
import gsap from "gsap";
import "../styles/Landing.css"; // ensure it gets classes
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";

const CharacterModel = () => {
  const { setLoading } = useLoading();


  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    
    // Simulate loading completion since we are just loading an image now
    setTimeout(() => {
      progress.loaded();
    }, 500);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "center 55%",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".whatIDO",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    if (window.innerWidth > 1024) {
      tl1
        .fromTo(".character-model", { x: 0, y: 0 }, { x: "-25%", y: 0, duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(".character-model", { pointerEvents: "inherit" }, { pointerEvents: "none", x: "-2%", delay: 2, duration: 5 }, 0)
        .fromTo(".what-box-in", { display: "none" }, { display: "flex", duration: 0.1, delay: 6 }, 0);

      tl3
        .fromTo(".character-model", { y: "0%" }, { y: "-100%", duration: 4, ease: "none", delay: 1 }, 0)
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0);
    } else {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }

  }, []);

  return (
    <div className="character-container">
      <div className="character-model">
        <img 
          src="/images/handsfold_nobg.png" 
          alt="Character"
          className="pratyay-character"
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "contain", 
            position: "relative"
          }} 
        />
      </div>
    </div>
  );
};

export default CharacterModel;
