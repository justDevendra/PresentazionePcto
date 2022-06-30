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

let arrImgModals = [
  { name: "PLC", img: "plc.png" },
  { name: "SCADA", img: "scada.jpg" },
  { name: "HMI", img: "hmi.png" },
];

//modal
let modal = document.querySelector(".modal-c1");
let modalTitle = document.querySelector(".modal-c1-title");
let modalContentImg = document.querySelector(".modal-c1-img");

//modal overlay
let modalOverlay = document.querySelector(".overlay-c1");

//open modal btns
let arrImgModalBtns = document.querySelectorAll(".openImgModel");

for (let i = 0; i < arrImgModalBtns.length; i++) {
  arrImgModalBtns[i].addEventListener("click", () => {
    for (let k = 0; k < arrImgModals.length; k++) {
      if (arrImgModals[k].name == arrImgModalBtns[i].innerText) {
        modalTitle.innerText = arrImgModals[k].name;
        modalContentImg.style.backgroundImage =
          "url(./assets/img/" + arrImgModals[k].img + ")";

        modal.style.display = "block";
        modalOverlay.style.display = "block";
      }
    }
  });
}

//modal close btn
let modalClose = document.querySelector(".closeModalC1");
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
});
