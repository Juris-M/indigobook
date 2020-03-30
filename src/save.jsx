import React, { useState, useCallback, useEffect } from "react";
import Spinner from "react-spinner";

const SaveButton = () => {
  const [pendingOn, setPending] = useState(false);
  
  const startSave = useCallback(() => setPending(pendingOn => pendingOn = true), []);
  const endSave = useCallback(() => setPending(pendingOn => pendingOn = false), []);

    const handleClick = (e) => {
        e.persist();
        import(/* webpackChunkName: "saveops" */ './saveops').then(({ default: saveops }) => {
            e.persist();
            saveops(e, startSave, endSave);
        });
    };
    return (
            <button onClick={handleClick} id="save-button">{ pendingOn ? <Spinner /> : 'Save' }</button>
    );
}

export default SaveButton;
