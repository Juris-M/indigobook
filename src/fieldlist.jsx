import React, {useState, useEffect, useCallback} from "react";
import Spinner from './spinner.jsx';
import axios from 'axios';
import './fieldlist.css';



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
        return <div className="table-display">
            {
                listItems.map(info => {
                    return (
                        <React.Fragment key={info.label}>
                            <div className="label">{info.label}</div>
                            <div className="value">{info.value}</div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    } else {
        return <div className="spin-central"><Spinner /></div>
    }
}
