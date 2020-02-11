import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import './fieldlist.css';
import Spinner from "react-spinner";

import './react-spinner.css';

const axiosGetAsync = async (url) => {
      var res = await axios(url);
      return res;
}

export default (props) => {
    const [listItems, setListItems] = useState([]);
    const getItems = useCallback((data) => setListItems((listItems) => listItems = data), []);
    useEffect(() => {
        var func = async () => {
          const key = props.id.slice(-8);
          var response = await axiosGetAsync(props.urlStub + 'itemdata/' + key + '.json');
          getItems(response.data);
        }
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
        return <Spinner />
    }
    
}
