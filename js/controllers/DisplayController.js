var displayController = function () {
    var inp;
    var model = displayModel;
    function init() {
        // create a view using the model

        inp = new displayView(model);
        inp.getInput();

    }
    this.getInputCtrl = function () {
        return inp.getInput();
    }

    init();

};


