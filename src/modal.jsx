import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { FieldList } from './fieldlist.jsx';

import "./modal.css";

var urlStub = null;
if (!(window.location.host.startsWith("127.0.0.1")) && !(window.location.host.startsWith("localhost"))) {
    urlStub = 'https://raw.githubusercontent.com/Juris-M/indigobook/gh-pages/';
} else {
    urlStub = '/'
}

export const App = () => {
    // States to report things into React
    const [popupOn, setPopup] = useState(false);
    const [bibdata, setBibdata] = useState({});
    const [evdata, setEvdata] = useState({});

    // Callbacks to manipulate the states
    const openModal = useCallback(() => setPopup(popupOn => popupOn = true), []);
    const closeModal = useCallback(() => setPopup(popupOn => popupOn = false), []);
    const getEvdata = useCallback((ev) => setEvdata(evdata => {
        return {
            id: ev.currentTarget.getAttribute("id"),
            cite: ev.currentTarget.innerHTML
        }
    }))

    // An effect to set up the event listeners
    useEffect(() => {
        const nodes = document.getElementsByClassName("cite");
        for (var node of nodes) {
            node.addEventListener("click", (ev) => {
              getEvdata(ev);
              openModal();
            })
        }
      }, []);

    // The popup
    return (
    <Popup 
        open={popupOn}
        modal
        defaultOpen={false}
        closeOnDocumentClick
        closeOnEscape
        onClose={closeModal}
    >
    {close => {
    return (
        <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(evdata.cite)}}></div>
        <div className="content">
          {" "}
          <FieldList id={evdata.id} urlStub={urlStub}/>
        </div>
        <div className="actions">
          <div className="login-note">
          <p>
              The citation at the top is generated from the listed Jurism metadata.
            </p>
            <p>
              Log in to GitHub to propose changes or additions to the Indigo Book examples.
            </p>
          </div>
          <Popup
            trigger={<button className="button"> Login </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
        </div>
      </div>
    )}}
    </Popup>
)}

ReactDOM.render(<App />, document.querySelector("#popup-root"));
