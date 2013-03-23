console.log('mvc-example');

var icecreamModel = {
    list: [
        {id:'t1', name:'vanilla'},
        {id:'t2', name:'chocolate'},
        {id:'t3', name:'orange'},
        {id:'t4', name:'chocolate mint'},
        {id:'t5', name:'strawberry'},
        {id:'t6', name:'matcha'},
    ],
    
    getAll: function() {
        return this.list;
    },

    findById: function(id) {
        return $.grep(this.list, function(val) {
            return id == val.id;
        })[0];
    } 
};

var selectionModel = {
    list: [],

    icecreamNumber: 2,

    add: function(item) {
        var list = this.list;
        list.push(item);
        if (list.length > this.icecreamNumber) {
            list.shift();
        }
        this.updateViews();
    },

    clear: function() {
        this.list = [];
        this.updateViews();
    },

    contain: function(icecream) {
        return this.list.indexOf(icecream) >= 0;
    },

    containById: function(id) {
        return this.contain(icecreamModel.findById(id));
    },

    getIcecreams: function() {
        return this.list;
    },

    updateViews: function() {
        updateSelection();
        updateIcecreamList();
    }
};

$(function(){
    var els = $("#icecreams");
    $.each(icecreamModel.getAll(),
        function(i, icecream) {
            els.append(
                $("<li>")
                    .append($("<input type='checkbox'>")
                        .attr('name', icecream.id))
                        .append($("<span>").text(icecream.name))
                    .click(function(event) {
                        console.log(this + "clicked");
                        onclickIcecream(event);
                    })
            );
        }
    );
    selectionModel.updateViews();

    $("#clear-icecreams").click(function() {
        selectionModel.clear();
    });
});

function updateSelection() {
    $('#icecreams input[type="checkbox"]').each(function(i, elm) {
        elm.checked = selectionModel.containById(elm.name);
    });
}

function updateIcecreamList() {
    $('#icecream-list').text(
        $.map(selectionModel.getIcecreams(), function(val) {
            return val.name;
        }).join(" > ")
    );
}

function onclickIcecream(event) {
    var checkbox = $(event.currentTarget)
                    .find("input[type=checkbox]");
    if (checkbox) {
        var item = icecreamModel.findById(checkbox.attr('name'))
        console.log("add "+item);
        selectionModel.add(
            item
        );
    }
}
