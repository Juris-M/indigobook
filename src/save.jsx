import React, { useState, useCallback, useEffect } from "react";
import Spinner from "react-spinner";
import { getPullRequestURL } from './utils.js';
import checkpull from './checkpull';

const SaveButton = (props) => {
  const [pendingOn, setPending] = useState(false);
  
  const startSave = useCallback(() => setPending(pendingOn => pendingOn = true), []);

  const endSave = async () => {
      await checkpull(props.citationInfo);
      await props.modal();
  }

    const handleClick = () => {
        import(/* webpackChunkName: "saveops" */ './saveops').then(({ default: saveops }) => {
            saveops(props.citationInfo, startSave, endSave);
        });
    };
    return (
            <button onClick={handleClick} id="save-button">{ pendingOn ? <Spinner /> : 'Save' }</button>
    );
}

export default SaveButton;
