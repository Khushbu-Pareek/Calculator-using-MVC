var buttonView = function(model, element, value, parent) {
    var btn = document.createElement('button'),
        oButton = element;

    function init  () {
        btn.className = model.className;
        btn.style.width = model.width;
        btn.style.height = model.height;
        btn.innerHTML = value;
        addElementonClick();
        oButton.appendChild(btn);

    }

    addElementonClick = function () {
        btn.addEventListener('click', function(e){
            parent.onButtonClick(e, parent);
        }, false )

    }

    init();

};

