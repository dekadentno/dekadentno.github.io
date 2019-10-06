(function() {
  window._log =
    (window.console.log.bind && window.console.log.bind(window.console)) ||
    function() {};

  var TYPEIT_INSTANCE;

  var App = {
    init: function() {
      _log("Why are you looking at my logs?");

      this.initParticles();
      this.initStepOne();
    },
    initStepFour() {
      TYPEIT_INSTANCE.destroy();
      document
        .getElementsByClassName("bash-4")[0]
        .classList.remove("displaynone");
      TYPEIT_INSTANCE = new TypeIt(".bash-4", {
        strings:
          'Check out my CV <a target="_blank" href="https://dekadentno.github.io/cv.html">here</a>.',
        speed: 60,
        html: true,
        waitUntilVisible: true
      }).go();
    },
    initStepThree() {
      TYPEIT_INSTANCE.destroy();
      document
        .getElementsByClassName("bash-3")[0]
        .classList.remove("displaynone");
      TYPEIT_INSTANCE = new TypeIt(".bash-3", {
        speed: 60,
        waitUntilVisible: true,
        afterComplete: () => {
          setTimeout(() => this.initStepFour(), 2000);
        }
      })
        .type("I'm a programmer.")
        .pause(1500)
        .delete(11)
        .type("geek.")
        .pause(1500)
        .delete(5)
        .type("web developer.")
        .go();
    },
    initStepTwo() {
      TYPEIT_INSTANCE.destroy();
      document
        .getElementsByClassName("bash-2")[0]
        .classList.remove("displaynone");
      TYPEIT_INSTANCE = new TypeIt(".bash-2", {
        strings: "My name is Matej.",
        speed: 60,
        waitUntilVisible: true,
        afterComplete: () => {
          setTimeout(() => this.initStepThree(), 2000);
        }
      }).go();
    },
    initStepOne() {
      TYPEIT_INSTANCE = new TypeIt(".bash-1", {
        speed: 60,
        waitUntilVisible: true,
        afterComplete: () => {
          setTimeout(() => this.initStepTwo(), 2000);
        }
      })
        .pause(2000)
        .type("Hello, stranger.")
        .go();

      typeit.destroy();
    },
    initParticles() {
      particlesJS("sorry", {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: ["#3e92cc", "#f30030", "#83d238", "#fffaff"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#f30030"
            },
            polygon: {
              nb_sides: 10
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0.25,
              sync: false
            }
          },
          size: {
            value: 2.5,
            random: false,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.15,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#f30030",
            opacity: 0.35,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  };
  window.App = App;
  App.init();
})();
