const fs = require("fs");
const path = require("path");
const dom = require("htmldom2").DOMParser;
const xpath = require("xpath");
const serializer = require("htmldom2").XMLSerializer;
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

var sectionVal = {
  "NI4GXMY5": {
    "section": "6578",
    "type": "regulation"
  },
  "5GZWVD6E": {
    "section": "11",
    "type": "regulation"
  },
  "SHU3ZUFD": {
    "section": "12-34-56.78",
    "type": "regulation"
  },
  "MVWMGTED": {
    "section": "12-34-56",
    "type": "statute"
  },
  "FC8Z733Z": {
    "section": "12-34-56",
    "type": "statute"
  },
  "3QZG4TBG": {
    "section": "12.34",
    "type": "regulation"
  },
  "CT9GHMDJ": {
    "section": "12.34.56",
    "type": "statute"
  },
  "JJCWQ7JR": {
    "section": "12.34.56",
    "type": "statute"
  },
  "QFQQ64PA": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "9ZQ9GNDC": {
    "section": "12-34",
    "type": "statute"
  },
  "UTBJY7FU": {
    "section": "12-34",
    "type": "statute"
  },
  "ZY98I9SK": {
    "section": "12-34-56",
    "type": "statute"
  },
  "82FTPXMZ": {
    "section": "12-34-56",
    "type": "statute"
  },
  "GXPEF2TT": {
    "section": "12-34-56",
    "type": "statute"
  },
  "IB2YYKAF": {
    "section": "12-34",
    "type": "regulation"
  },
  "YD6EATIL": {
    "section": "12-34",
    "type": "regulation"
  },
  "Y4AHQVBE": {
    "section": "12-34-56",
    "type": "statute"
  },
  "4RCVP9HI": {
    "section": "sec. 18\\-8\\-115",
    "type": "statute"
  },
  "LAX7VHQH": {
    "section": "12-34-56",
    "type": "statute"
  },
  "8HD7DA3G": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "DLT3FII3": {
    "section": "12-34",
    "type": "statute"
  },
  "V353DVDV": {
    "section": "12-34",
    "type": "statute"
  },
  "TX58DBAZ": {
    "section": "12-34",
    "type": "statute"
  },
  "6QWJYW4B": {
    "section": "12-34",
    "type": "statute"
  },
  "2S6CE6VB": {
    "section": "12-34",
    "type": "regulation"
  },
  "P7P7AD5M": {
    "section": "12-34",
    "type": "regulation"
  },
  "NSPCG56G": {
    "section": "1201",
    "type": "statute"
  },
  "6VFP7P42": {
    "section": "271(e)",
    "type": "statute"
  },
  "KGSQ9DRV": {
    "section": "sec. 387",
    "type": "statute"
  },
  "F6DICN4K": {
    "section": "12-34.56",
    "type": "regulation"
  },
  "Q6UC2D7I": {
    "section": "12.34",
    "type": "statute"
  },
  "MP5894F5": {
    "section": "12.34",
    "type": "statute"
  },
  "2CJ8VRXV": {
    "section": "12.34",
    "type": "statute"
  },
  "2JPI7SC6": {
    "section": "12-34-56",
    "type": "statute"
  },
  "RRCSHBXK": {
    "section": "12-34-56",
    "type": "statute"
  },
  "MISCZ8PY": {
    "section": "12-34-56.78",
    "type": "regulation"
  },
  "XBLPWZQY": {
    "section": "12-34-56",
    "type": "statute"
  },
  "XV4N8UXY": {
    "section": "12-34",
    "type": "statute"
  },
  "7B68PWBI": {
    "section": "12-34",
    "type": "statute"
  },
  "YFK4NY8K": {
    "section": "12-34",
    "type": "statute"
  },
  "EXP89UCD": {
    "section": "12.34.56.78",
    "type": "regulation"
  },
  "7FS9JSC3": {
    "section": "12-34",
    "type": "statute"
  },
  "LY3YLJVF": {
    "section": "12-34",
    "type": "statute"
  },
  "BSA5N2EG": {
    "section": "11",
    "type": "statute"
  },
  "RNFQK7NM": {
    "section": "11",
    "type": "regulation"
  },
  "NN7FXE3T": {
    "section": "11",
    "type": "regulation"
  },
  "RFV23Y49": {
    "section": "12-34-56-78",
    "type": "statute"
  },
  "YWTDX3RN": {
    "section": "12-34-56-78",
    "type": "statute"
  },
  "X3GY5VHP": {
    "section": "12-34-56-78",
    "type": "statute"
  },
  "CM2PNJUW": {
    "section": "12-34.56",
    "type": "regulation"
  },
  "5QTA7PFM": {
    "section": "12.34",
    "type": "statute"
  },
  "V733P7BY": {
    "section": "12.34",
    "type": "statute"
  },
  "WCZN3N2A": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "P4TGSXTF": {
    "section": "12-34",
    "type": "statute"
  },
  "UEJ836K6": {
    "section": "12.34",
    "type": "statute"
  },
  "I6I6G78A": {
    "section": "12.34",
    "type": "statute"
  },
  "V4IG2Z9J": {
    "section": "sec. 1051-1141n",
    "type": "statute"
  },
  "YGRZJ7CP": {
    "section": "10",
    "type": "regulation"
  },
  "TLAXBE9J": {
    "section": "10",
    "type": "regulation"
  },
  "UQ337UWS": {
    "section": "ch. 268",
    "type": "statute"
  },
  "BSBSSXK9": {
    "section": "6578",
    "type": "regulation"
  },
  "JATE5T96": {
    "section": "12-34",
    "type": "statute"
  },
  "FYMHN5SR": {
    "section": "935S",
    "type": "treaty"
  },
  "TXHXR9EP": {
    "section": "12.34",
    "type": "regulation"
  },
  "R4EQRM2T": {
    "section": "12.34",
    "type": "statute"
  },
  "RX3PBRYE": {
    "section": "12.34",
    "type": "statute"
  },
  "NKWSKLQ7": {
    "section": "12.34",
    "type": "statute"
  },
  "35KKKG56": {
    "section": "12.34",
    "type": "statute"
  },
  "WVKVAQWB": {
    "section": "12.34",
    "type": "statute"
  },
  "IZ5267GN": {
    "section": "12-34-56",
    "type": "statute"
  },
  "33YHI25E": {
    "section": "12-34-56",
    "type": "statute"
  },
  "BPUDM7R6": {
    "section": "12.34",
    "type": "statute"
  },
  "Z4VIIKAJ": {
    "section": "12-34.56",
    "type": "regulation"
  },
  "CFXKT78E": {
    "section": "12.34",
    "type": "statute"
  },
  "ZYVZ3FK6": {
    "section": "11",
    "type": "regulation"
  },
  "BTJ8GNN3": {
    "section": "12-34-56",
    "type": "statute"
  },
  "WJ87A78Q": {
    "section": "12-34-56",
    "type": "statute"
  },
  "AADSJZCP": {
    "section": "11",
    "type": "regulation"
  },
  "BUX8BYUC": {
    "section": "12-34",
    "type": "statute"
  },
  "8XRA5MGQ": {
    "section": "12-34",
    "type": "statute"
  },
  "8F8VYCL7": {
    "section": "11",
    "type": "regulation"
  },
  "GBLGDV25": {
    "section": "12-34-56",
    "type": "statute"
  },
  "NYZRRYE8": {
    "section": "12-34-56",
    "type": "statute"
  },
  "JBQUFACY": {
    "section": "11",
    "type": "regulation"
  },
  "RVQTNW8H": {
    "section": "11",
    "type": "statute"
  },
  "8ANRHBXE": {
    "section": "12.34.56.78",
    "type": "statute"
  },
  "GXPDRZSK": {
    "section": "12-34-56",
    "type": "statute"
  },
  "Q7PAT4PZ": {
    "section": "12-34-56",
    "type": "statute"
  },
  "VYFWVA5I": {
    "section": "12-34-56",
    "type": "statute"
  },
  "PD5WZMGY": {
    "section": "sec. 60.03",
    "type": "statute"
  },
  "FYIZVAPB": {
    "section": "12-34",
    "type": "regulation"
  },
  "GNYWQW96": {
    "section": "12-34",
    "type": "statute"
  },
  "G2ELCP84": {
    "section": "12-34",
    "type": "statute"
  },
  "5U3ZKYMZ": {
    "section": "12-34",
    "type": "statute"
  },
  "I73SZNFF": {
    "section": "12.34",
    "type": "regulation"
  },
  "PNBRC3SR": {
    "section": "12.34",
    "type": "statute"
  },
  "67UPYK6Y": {
    "section": "12.34",
    "type": "statute"
  },
  "VMAZH8US": {
    "section": "12.34",
    "type": "statute"
  },
  "X2QDQDB2": {
    "section": "11",
    "type": "regulation"
  },
  "FJDZTB68": {
    "section": "12.34",
    "type": "statute"
  },
  "WACPK3HA": {
    "section": "12.34",
    "type": "statute"
  },
  "59S2P65P": {
    "section": "sec. 2921.22",
    "type": "statute"
  },
  "MVB4Y5A7": {
    "section": "11",
    "type": "regulation"
  },
  "JB6FQF2Q": {
    "section": "12.34",
    "type": "statute"
  },
  "ZXPYGM8Z": {
    "section": "12.34",
    "type": "statute"
  },
  "Z5YZXY66": {
    "section": "12.34",
    "type": "statute"
  },
  "VBLUIJXH": {
    "section": "1101",
    "type": "statute"
  },
  "SIEKVMLW": {
    "section": "sec. 1.704-1",
    "type": "regulation"
  },
  "ZQC2FBIF": {
    "section": "12-34-56",
    "type": "statute"
  },
  "YASIDXM3": {
    "section": "12-34-56",
    "type": "statute"
  },
  "8K328LX9": {
    "section": "6578",
    "type": "regulation"
  },
  "9PHBNQ33": {
    "section": "12-34-56",
    "type": "statute"
  },
  "MLALJ25K": {
    "section": "11",
    "type": "regulation"
  },
  "D495J8RT": {
    "section": "12-34-56",
    "type": "statute"
  },
  "BU5ZUDAE": {
    "section": "2701-2711",
    "type": "statute"
  },
  "8PATC5EY": {
    "section": "sec. 1.274\\-5T(6)",
    "type": "regulation"
  },
  "YSPCPX64": {
    "section": "sec. 5e.274-8",
    "type": "regulation"
  },
  "7MP93FZL": {
    "section": "12-34-56",
    "type": "statute"
  },
  "BPNCJD6E": {
    "section": "12-34-56",
    "type": "statute"
  },
  "VWMIQ33Q": {
    "section": "11",
    "type": "regulation"
  },
  "LRJMCIKR": {
    "section": "12.34",
    "type": "regulation"
  },
  "UKY8AR64": {
    "section": "sec. 1.41-2",
    "type": "regulation"
  },
  "A4S6CLKC": {
    "section": "sec. 1.41-2",
    "type": "regulation"
  },
  "DCJKXIHJ": {
    "section": "sec. 1.41-2",
    "type": "regulation"
  },
  "RRXHVULG": {
    "section": "sec. 1.414(r)\\-8",
    "type": "regulation"
  },
  "56S35GWU": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "2K9LJNEJ": {
    "section": "12-34-56",
    "type": "statute"
  },
  "BZXLDXQQ": {
    "section": "12-34-56",
    "type": "statute"
  },
  "AA3RSMUC": {
    "section": "12-34",
    "type": "statute"
  },
  "QTIK7MLY": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "VWC48GBQ": {
    "section": "12-34",
    "type": "statute"
  },
  "YSPMDQ96": {
    "section": "12-34",
    "type": "statute"
  },
  "5CXYJFCD": {
    "section": "12-34-56",
    "type": "statute"
  },
  "GC9MR8Q4": {
    "section": "12-34-56",
    "type": "statute"
  },
  "A37LGVQ4": {
    "section": "12-34-56",
    "type": "statute"
  },
  "LHERQINJ": {
    "section": "12-34-56",
    "type": "statute"
  },
  "Y47NDUKA": {
    "section": "12-34-56",
    "type": "regulation"
  },
  "HV4W97Q2": {
    "section": "12.34.56",
    "type": "statute"
  },
  "RBQ3RK7R": {
    "section": "12.34.56",
    "type": "statute"
  },
  "VED9TGB2": {
    "section": "12.34.56",
    "type": "statute"
  },
  "2J6LPFJJ": {
    "section": "12-34",
    "type": "regulation"
  },
  "E8V8HXM4": {
    "section": "12.34",
    "type": "statute"
  },
  "UR77T55W": {
    "section": "12.34",
    "type": "statute"
  },
  "V32M226N": {
    "section": "15",
    "type": "statute"
  },
  "Y5PA9P8D": {
    "section": "15",
    "type": "statute"
  },
  "LJ4DQWM6": {
    "section": "12-34-56",
    "type": "statute"
  },
  "J9FPYSSE": {
    "section": "12-34-56",
    "type": "statute"
  },
  "JYIPQKYU": {
    "section": "5",
    "type": "bill"
  },
  "MCTDXBTV": {
    "section": "8921/10",
    "type": "statute"
  },
  "S959UBZ6": {
    "section": "8921/10",
    "type": "statute"
  },
  "4WU5C7RP": {
    "section": "8921/10",
    "type": "statute"
  },
  "4IDZRMES": {
    "section": "123:456",
    "type": "statute"
  },
  "KUZA9BAK": {
    "section": "12-34",
    "type": "statute"
  },
  "2P77WH6C": {
    "section": "12-34",
    "type": "statute"
  },
  "BMRSPMIT": {
    "section": "123:456",
    "type": "statute"
  },
  "G5T2FURY": {
    "section": "123:456",
    "type": "statute"
  },
  "PQ2ERNIR": {
    "section": "123:456",
    "type": "statute"
  },
  "AGABMXWV": {
    "section": "123:456",
    "type": "statute"
  },
  "NAKP6SNH": {
    "section": "12:34-56.78",
    "type": "regulation"
  },
  "CRK6I9JF": {
    "section": "12:34-56-78",
    "type": "regulation"
  },
  "SJTJNZ33": {
    "section": "465",
    "type": "statute"
  },
  "6CLBIVZE": {
    "section": "935S",
    "type": "treaty"
  },
  "ENA9DWSG": {
    "section": "935S",
    "type": "statute"
  },
  "2V6WZEBC": {
    "section": "935S",
    "type": "treaty"
  },
  "XUNQYV9W": {
    "section": "935S",
    "type": "treaty"
  },
  "Y85A7H2F": {
    "section": "935S",
    "type": "treaty"
  },
  "XYJRDF39": {
    "section": "935S",
    "type": "treaty"
  },
  "C4L3UG6F": {
    "section": "935S",
    "type": "treaty"
  },
  "TQ479SYL": {
    "section": "935S",
    "type": "treaty"
  },
  "44WMFDCM": {
    "section": "935S",
    "type": "statute"
  },
  "4J77LTEJ": {
    "section": "935S",
    "type": "treaty"
  },
  "2XW2C6JV": {
    "section": "935S",
    "type": "treaty"
  },
  "CTNY5UN3": {
    "section": "935S",
    "type": "statute"
  },
  "ENLRCLY7": {
    "section": "935S",
    "type": "bill"
  },
  "W7CW54XH": {
    "section": "935S",
    "type": "statute"
  }
}

const xml = fs.readFileSync(staticPath("indigobook.html")).toString();
const doc = new dom().parseFromString(xml, "text/html");
var nodes = xpath.select("//span[contains(@class, 'cite')]", doc);

const getNodes = async () => {
    var ret = [];
    var removals = {};
        
    for (var node of nodes) {

        // console.log("ONE MORE THING! Remove section values from these input objects and DB items.");
        // process.exit();
        
        // Get values of id, class, and data-info
        
        var html_id = node.getAttribute("id");
        var data_info = node.getAttribute("data-info");

        var key = null;
        if (data_info) {
            key = data_info.split("-")[1];
        }
        if (!key) continue;
        if (!sectionVal[key]) continue;
        
        var locator = null;
        if (data_info) {
            locator = data_info.split("-")[4];
        }

        var section = null;
        var section = sectionVal[key].section;

        if (key && section) {

            // console.log(sectionVal[key].type);
            removals[key] = true;
            
            /*
             This was phase 1
             */
            /*
            var label = "";
            var m = section.match(/^(?:([a-z]+\.)\s+)*(.*)/);
            if (m) {
                if (m[1]) {
                    label = `${m[1]} `;
                }
                section = m[2].replace(/\-/g, "\\-");
            }
            if (!label) {
                label = "sec. ";
            }
            locator = `${label}${section}`;
            var lst = data_info.split("-").slice(0, 4);
            lst.push(locator);
            data_info = lst.join("-");
             console.log(data_info);
             node.setAttribute("data-info", data_info);
            */
        }
    }
    /*
     Also phase 1
     */
    /*
     var html = (new serializer()).serializeToString(doc);
     html = html.replace(/\&amp;/g, "&");
     fs.writeFileSync("indigobook-NEW.html", html);
     */
    console.log(JSON.stringify(removals, null, 2));
}



const run = async () => {
    var nodes = await getNodes();
}

run();

