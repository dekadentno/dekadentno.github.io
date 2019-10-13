(function() {
  window._log =
    (window.console.log.bind && window.console.log.bind(window.console)) ||
    function() {};

  var TYPEIT_INSTANCE;

  var App = {
    init: function() {
      _log("Why are you looking at my logs?");

      this.calculateBday();
    },
    calculateBday() {
      let age = Math.floor(
        (new Date() - new Date("1990-06-26").getTime()) / 3.15576e10
      );
      document.getElementsByClassName("bday")[0].innerText = age;
    }
  };
  window.App = App;
  App.init();
})();
