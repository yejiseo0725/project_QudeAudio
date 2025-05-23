window.onload = function () {
  // 01. gnb animation
  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", () => {
    menuBox.classList.toggle("on");
  });

  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  // visual
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%",
        end: "100% 0%",
        scrub: 1, // scroll 사용시에만 애니메이션이 진행될 수 있게 하는 속성
        // markers: true,
      },
    })

    .to(
      ".logoWrap #j",
      { x: -150, y: 250, rotate: 20, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #y",
      { x: -30, y: 150, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #o",
      { x: 0, y: 400, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #u",
      { x: 50, y: 300, rotate: 10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #n",
      { x: 100, y: 100, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #g",
      { x: 50, y: 450, rotate: 20, ease: "none", duration: 5 },
      0
    );

  // .mainTextBox .title i (common)
  gsap.utils.toArray(".mainTextBox .title i").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
          // markers: true,
        },
      })

      .fromTo(
        selector,
        { overflow: "hidden", y: 150 },
        { y: 0, ease: "none", duration: 5 },
        0
      );
  });

  // .subText p (common)
  gsap.utils.toArray(".subText p").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
          markers: true,
        },
      })
      .fromTo(
        selector,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 5 },
        0
      );
  });

  // con1 textAni: text change animation
  let textAniList = document.querySelectorAll(".con1 .textAni li");
  let textAni = gsap.timeline({ repeat: -1 });

  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], 0.8, {
      opacity: 1,
      repeat: 1,
      delay: 0,
      x: 0,
      yoyo: true,
      ease: "power4.out",
    });
  }
  textAni.play();
};
