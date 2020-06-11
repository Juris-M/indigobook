const fs = require("fs");
const path = require("path");
const axios = require("axios");

const staticPath = (filename) => {
    return path.join(__dirname, "static", filename);
}
const scriptsPath = (filename) => {
    return path.join(__dirname, "scripts", filename);
}
const mapsPath = (filename) => {
    return path.join(__dirname, "..", "JM", "jurism", "juris-abbrevs", filename);
}
const immediatePath = (filename) => {
    return path.join(__dirname, filename);
}

// const info = JSON.parse(fs.readFileSync(immediatePath("FIXUP-LEG-REG-DATES-OBJECT.json")).toString());

const info = JSON.parse(fs.readFileSync(immediatePath("EXTRA-FIX.json")).toString());

const itemIDs = info.map((o) => {
    return o.id;
});


const getExistingItem = async (key) => {
    var result = await axios({
        method: "get",
        url: `https://api.zotero.org/groups/2319948/items/${key}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc"
        }
    });
    return result.data.data;
}

const getNewItem = async (key) => {
    var result = await axios({
        method: "get",
        url: `https://api.zotero.org/groups/2319948/items?tag=${key}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc"
        }
    });
    return result.data[0].data;
}

const patchItem = async (existingItem, newItem) => {
    var nochange = [
        "key",
        "version",
        "tags",
        "collections",
        "relations",
        "dateModified",
        "dateAdded"
    ];
    var patchData = {};
    for (var field in newItem) {
        if (nochange.indexOf(field) > -1) continue;
        // if (newItem[field].length === 0) continue;
        patchData[field] = newItem[field];
    }
    var result = await axios({
        method: "patch",
        url: `https://api.zotero.org/groups/2319948/items/${existingItem.key}`,
        headers: {
            Authorization: "Bearer 9HW9R62bchgk0jm0ukB62Qsc",
            "If-Unmodified-Since-Version": existingItem.version
        },
        data: patchData
    }).catch((e) => {
        console.log(`OUCH ${e}`);
        process.exit();
    });
    return result;
};

const run = async () => {
    for (var key of itemIDs) {
        console.log(`Merging for ${key}`);
        var existingItem = await getExistingItem(key);
        var newItem = await getNewItem(key);
        await patchItem(existingItem, newItem);
    }
};

run();
