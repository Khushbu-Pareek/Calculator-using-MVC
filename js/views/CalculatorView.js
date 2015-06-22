var calculatorView = function(model) {
    var calc = document.createElement('div');

    function init  () {
        calc.className = model.className;
        calc.style.width = model.width;
        calc.style.height = model.height;
        //document.getElementById(oCalc).appendChild(calc);

    }
    this.getCalDiv = function(){
        return calc;
    }

    init();

};

