$(function() {

    var orderedFields = ["type", "caseName", "jurisdiction", "court", "reporterVolume", "reporter", "firstPage", "dateDecided"];
    
    var z2j = require("./zotero2jurism");

    var apiStub = "https://api.zotero.org/groups/2319948/items/"
    
    function setField(grid, row, info) {
        var cell1 = document.createElement("div");
        var cell2 = document.createElement("div");
        
        cell1.setAttribute("style", "font-weight: bold; grid-column:1; grid-row: " + row + ";");
        cell1.setAttribute("align", "right");
        cell2.setAttribute("style", "grid-column:2; grid-row: " + row + ";");

        cell1.innerHTML = info.label + ":";
        cell2.innerHTML = info.value;
        
        grid.append(cell1);
        grid.append(cell2);
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
            grid.setAttribute("class", "grid");
            grid.setAttribute("style", "display: grid;grid-gap: 3px; grid-template-columns: 150px auto");
            var cite = document.createElement("p");
            cite.setAttribute("style", "grid-column: 1 / 3; grid-row: " + row + "; border-radius: 0.5em; background: #ccc; padding: 0.5em;");
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
            hline.setAttribute("style", "margin: 0.5em 0; grid-column: 1 / 3; grid-row: " + row + ";");
            grid.append(hline);
            html.append(grid);
            row++;

            var buttonDiv = document.createElement("div");
            var button = document.createElement("a");
            
            buttonDiv.setAttribute("style", "grid-column: 1 / 3; grid-row: " + row + "; font-size: 110%;");
            buttonDiv.setAttribute("align", "right");
            button.setAttribute("style", "cursor: pointer; font-weight: bold; color:white; background: green; border-radius: 1em; padding: 0.5em");

            button.innerHTML = "Login";
            
            buttonDiv.append(button);
            grid.append(buttonDiv);
            
            $.busyLoadFull("hide");
            $(html).appendTo('body').modal();
        }, "json");
    });
});
