import React, { useState, useCallback, useEffect } from "react";
import Spinner from "react-spinner";
import checkpull from './checkpull';

const SaveButton = (props) => {
  const [pendingOn, setPending] = useState(false);
  
  const startSave = useCallback(() => setPending(pendingOn => pendingOn = true), []);
  const endSaveFinal = useCallback(() => setPending(pendingOn => {
        pendingOn = false;
        return pendingOn;
  }), []);

  const endSave = async (url) => {
      if (!url) {
        url = await checkpull();
      }
      await props.modal(url);
  }

    const handleClick = () => {
        import(/* webpackChunkName: "saveops" */ './saveops').then(({ default: saveops }) => {
            saveops(startSave, endSave);
        });
    };
    return (
            <button onClick={handleClick} id="save-button">{ pendingOn ? <Spinner /> : 'Save' }</button>
    );
}

export default SaveButton;
