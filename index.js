//full page
new fullpage("#fullpage", {
  anchors: ["page1", "page2", "page3", "page4"],
  sectionsColor: ["#292E6C", "#4664AF", "#159296", "#51ad8d", "#636b8e"],
  responsiveHeight: 410,
  navigation: true,
  credits: {
    enabled: false,
  },
});

//partcles
particlesJS("particles-js", {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "none",
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
});
