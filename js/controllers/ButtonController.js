var buttonController = function (element, value) {
    
    this.model = buttonModel;
    this.parentElement = element;
    this.value = value;

    function init() {
        // create a view using the model
    }

    this.onClickHandler = function (callback){
        //event
    };

};

buttonController.prototype.createButton = function(parent){
    new buttonView(this.model, this.parentElement, this.value, parent);
}


