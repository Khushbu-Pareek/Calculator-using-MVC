// Class operatorController
var operatorController = function (calculatorElement) {

    //for each instance...
    var self = this;
    self.parentElement = calculatorElement;
    self.model = new operatorButtonModel();
};

var operatorProto = operatorController.prototype;

operatorProto.generateAllOperatorButtons = function(parent){
    var data = this.model.getoperatorData();

    for(var i=0; i<data.length; i++) {
        value = data[i].value;
        new buttonController(this.parentElement, value).createButton(parent);
    }
}




