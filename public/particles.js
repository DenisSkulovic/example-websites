particlesJS("particles-js", {
  particles: {
    number: { value: 130, density: { enable: true, value_area: 800 } },
    color: { value: "#3448f3" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#3448f3",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.8 } },
      bubble: { distance: 1000, size: 4, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 2 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
