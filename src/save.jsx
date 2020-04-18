import React, { useState, useCallback, useEffect } from "react";
import Spinner from "react-spinner";
import { getPullRequestURL } from './utils.js';
import checkPull from './checkpull';

const SaveButton = (props) => {
  const [pendingOn, setPending] = useState(false);
  
  const startSave = useCallback(() => setPending(pendingOn => pendingOn = true), []);

  const endSave = async () => {
      await checkPull();
      await props.modal();
  }

    const handleClick = () => {
        import(/* webpackChunkName: "saveops" */ './saveops').then(({ default: saveops }) => {
            saveops(props.params, startSave, endSave);
        });
    };
    return (
            <button onClick={handleClick} id="save-button">{ pendingOn ? <Spinner /> : 'Save' }</button>
    );
}

export default SaveButton;
