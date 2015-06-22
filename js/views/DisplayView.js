var displayView = function(model) {
    var display = document.createElement('input');

    function init  () {
        display.className = model.className;
        display.style.width = model.width;
        display.style.height = model.height;
        display.setAttribute("readonly", "true");

    }

    this.getInput = function(){

        return display;
    }

    init();

};

