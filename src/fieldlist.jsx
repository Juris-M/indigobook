import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import './fieldlist.css';
import Spinner from "react-spinner";

import './react-spinner.css';

export const FieldList = props => {
    const [listItems, setListItems] = useState([]);
    const getItems = useCallback((data) => setListItems((listItems) => listItems = data), []);
    useEffect(() => {
        const key = props.id.slice(-8);
      
        axios.get(props.urlStub + 'itemdata/' + key + '.json')
        .then((response) =>{
              getItems(response.data);
        }).catch((err) => {
              console.log("ERROR: "+err.message);
        });
    }, []);
    if (listItems.length) {
        return <table className="table-display">
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
        </table>
    } else {
        return <Spinner />
    }
}
