import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import { urlParts } from "./utils.js";
import './fieldlist.css';
import displayer from "./displayer.js";
import Spinner from "react-spinner";

import './react-spinner.css';

var urlStub = urlParts().base;

var cache = {};

export default (props) => {
    const [listItems, setListItems] = useState([]);
    const storeItems = useCallback((data) => setListItems((listItems) => listItems = data), []);
    useEffect(() => {
        var func = async () => {
            var citationItems = props.citationInfo["citation-items"];
            var items = [];
            for (var itemInfo of citationItems) {
                if (cache[itemInfo.id]) {
                    item = cache[itemInfo.id];
                } else {
                    var response = await axios({ url: `${urlStub}itemdata/${itemInfo.id}.json` });
                    var item = response.data;
                    cache[itemInfo.id] = item;
                }
                items.push(item);
            }
            window.localStorage.setItem('cites_metadata', JSON.stringify(items));
            window.localStorage.setItem('cites_info', JSON.stringify(citationItems));
            // Magic here to transform CSL key/val on item to array of label + value objects
            var displayItem = await displayer(items[0], citationItems[0]);
            storeItems(displayItem);
        };
        func();
    }, []);
    if (listItems.length) {
        return <table className="table-display">
                 <tbody>
            {
                listItems.map(info => {
                    return (
                        <tr key={info.label}>
                            <td className="label">{info.label}</td>
                            <td className="value">{info.value}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    } else {
        return <Spinner className="black-wheel"/>
    }
    
}
