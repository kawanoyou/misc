function ok(title, expect, value) {
    if (expect === value) {
        console.log("OK : "+title);
    } else {
        console.error("NG : "+title+" ["+expect+"] -> ["+value+"]");
    }
}

function testModels() {
    var all = icecreamModel.getAll();

    ok("icecreamModel.getAll", all.length, 6);
    ok("icecreamModel.findById", icecreamModel.findById("t4"), all[3]);

    ok("selectionModel.default num", 0, selectionModel.getIcecreams().length);
    ok("selectionModel.contain", false, selectionModel.contain(all[0]));

    selectionModel.add(all[0]);
    ok("selectionModel.getIcecreams", 1, selectionModel.getIcecreams().length);
    ok("selectionModel.contain", true, selectionModel.contain(all[0]));

    selectionModel.add(all[1]);
    ok("selectionModel.getIcecreams", 2, selectionModel.getIcecreams().length);
    ok("selectionModel.contain", true, selectionModel.contain(all[1]));

    selectionModel.add(all[2]);
    ok("selectionModel.getIcecreams", 2, selectionModel.getIcecreams().length);
    ok("selectionModel.contain", false, selectionModel.contain(all[0]));
    ok("selectionModel.contain", true, selectionModel.contain(all[2]));
}

testModels();
