$(function() {

    var orderedFields = ["type", "caseName", "jurisdiction", "court", "reporterVolume", "reporter", "firstPage", "dateDecided"];
    
    var z2j = require("./zotero2jurism");

    var apiStub = "https://api.zotero.org/groups/2319948/items/"
    
    function setField(grid, row, info) {
        var label = document.createElement("div");
        var value = document.createElement("div");

        label.setAttribute("class", "label");
        label.setAttribute("align", "right");
        label.setAttribute("style", "grid-row: " + row + ";");

        value.setAttribute("class", "value");
        value.setAttribute("style", "grid-row: " + row + ";");

        label.innerHTML = info.label + ":";
        value.innerHTML = info.value;
        
        grid.append(label);
        grid.append(value);
        row++;
        return row;
    }
    
    $('.cite').click(function(event) {
        event.preventDefault();
        this.blur();
        $.busyLoadFull("show", {
            spinner: "accordion"
        });
        var key = this.id.slice(1);
        var id = this.id;
        $.get( apiStub + key, function( data ) {
            var jObj = z2j.zoteroToJurismData(data);
            var jMap = z2j.getLabelsAndVals(jObj);
            var html = document.createElement("div");
            html.setAttribute("class", "modal");
            var grid = document.createElement("div");
            var row = 1;
            grid.setAttribute("class", "citegrid");
            var cite = document.createElement("p");
            cite.setAttribute("class", "example");
            cite.setAttribute("style", "grid-row: " + row + ";");
            cite.innerHTML = $("#" + id).html();
            grid.append(cite);
            row++;
            var fieldStopList = {};
            for (var i in orderedFields) {
                var fieldName = orderedFields[i];
                if (jMap.fields[fieldName]) {
                    row = setField(grid, row, jMap.fields[fieldName]);
                    fieldStopList[fieldName] = true;
                }
            }
            for (var key in jMap.fields) {
                var info = jMap.fields[key];
                if (!fieldStopList[key]) {
                    row = setField(grid, row, info);
                }
            }
            var hline = document.createElement("hr");
            hline.setAttribute("class", "hline");
            hline.setAttribute("style", "grid-row: " + row + ";");
            grid.append(hline);
            html.append(grid);
            row++;

            var footer = document.createElement("div");
            var button = document.createElement("a");

            footer.setAttribute("class", "footer");
            footer.setAttribute("style", "grid-row: " + row + ";");
            footer.setAttribute("align", "right");

            button.setAttribute("class", "button");

            button.innerHTML = "Login";
            
            footer.append(button);
            grid.append(footer);
            
            $.busyLoadFull("hide");
            $(html).appendTo('body').modal();
        }, "json");
    });
});
