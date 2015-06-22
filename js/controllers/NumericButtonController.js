// Class numericController
var numericController = function (calculatorElement) {

    //for each instance...
    var self = this;
    self.parentElement = calculatorElement;
    self.model = new numericButtonModel();
};

var numericProto = numericController.prototype;

numericProto.generateAllNumericButtons = function(parent){
    var data = this.model.getnumericData();

    for(var i=0; i<data.length; i++) {
        value = data[i].value;
        new buttonController(this.parentElement, value).createButton(parent);
    }
}




