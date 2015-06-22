var calculatorController = function (element) {
    var self = this;
    self.model = calculatorModel;
     
    function init() {
        // create a view using the model
        self.calculatorStructure = new calculatorView(self.model).getCalDiv();

        var display = new displayController();
        //console.log(display.getInputCtrl());
        var displayStructure = display.getInputCtrl();

        self.calculatorStructure.insertBefore(displayStructure, self.calculatorStructure.firstChild);
        self.generateButtons();


    }
    this.render = function(){

        return self.calculatorStructure;
    }

    init();

};

var proto =  calculatorController.prototype;

/*=============================================
 =            Generates buttons                =
 =============================================*/

proto.generateButtons = function(){
    var numericInstance = new numericController(this.calculatorStructure);
    numericInstance.generateAllNumericButtons(this);

    var operatorInstance = new operatorController(this.calculatorStructure);
    operatorInstance.generateAllOperatorButtons(this);
}


proto.onButtonClick = function(e, parent) {

    var value = e.target.innerHTML;
    var container = e.target.parentNode.firstChild;
    if('C' === value){
        parent.clearText(container);
    } else if('=' === value) {
        parent.evaluateResult(container);
    } else {
        parent.displayResult(container, value);
    }
}
/*=============================================
 =            Clear Input field                =
 =============================================*/

proto.clearText = function(container) {

    // clear the display
    container.value = '';
}

/*=============================================
 =            Evaluate result                  =
 =============================================*/

proto.evaluateResult = function(container) {
    var result = eval(container.value);
    container.value = result;
}

/*=============================================
 =            Display result                   =
 =============================================*/

proto.displayResult = function(container, value) {

    if(container.value == undefined){
        container.value = '';
    }
    // add our new input to the display
    container.value += value;
}

