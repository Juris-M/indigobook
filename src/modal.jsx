import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { urlParts, startLogin, finishLogin, loginOK, logOut } from './login.js';
import Editor from './editor.jsx';

import "./modal.css";
import "./favicon-32x32.png";
import "./indigo-cover.png";
import "./ib-edit.pdf";

var urlStub = urlParts().base;

const spitFieldList = async (evdata, urlStub) => {
    await import(/* webpackChunkName: "fieldlist" */ './fieldlist.jsx').catch(e => 'Failed to load fieldlist module');
    return FieldList;
};

export const App = () => {
    // States to report things into React
    const [popupOn, setPopup] = useState(false);
    const [bibdata, setBibdata] = useState({});
    const [evdata, setEvdata] = useState({});
    const [editCite, setEditCite] = useState(false);
    const [loginState, setLoginState] = useState(false);

    // Callbacks to manipulate the states
    const openModal = useCallback(() => setPopup(popupOn => popupOn = true), []);

    // ZZZ We remove the ID and the text from localStorage on discretionary
    // closing of the popup.
    const closeModal = useCallback(() => setPopup(popupOn => {
          popupOn = false;
          window.localStorage.removeItem('cite_id');
          window.localStorage.removeItem('cite_text');
    }), []);

    const getEvdata = useCallback((data) => setEvdata(evdata => data), []);
    const getEditCiteOn = useCallback(() => setEditCite(editCite => editCite = true), []);
    const getEditCiteOff = useCallback(() => setEditCite(editCite => editCite = false), []);
    const getLoginStateOn = useCallback(() => setLoginState(loginState => loginState = true), []);
    const getLoginStateOff = useCallback(() => setLoginState(loginState => loginState = false), []);

    // An effect to set up the event listeners
    useEffect(() => {
        console.log('Set listeners');
        const nodes = document.getElementsByClassName("cite");
        for (var node of nodes) {
            // Pulling details from the event here makes it simpler to
            // repurpose the open event for login-revisits to the page.
            node.addEventListener("click", (ev) => {
              let data = {
                  id: ev.currentTarget.getAttribute("id"),
                  cite: ev.currentTarget.innerHTML
              }
              window.localStorage.setItem('cite_id', data.id);
              window.localStorage.setItem('cite_text', data.cite);
              getEvdata(data);
              openModal();
            })
        }
        window.addEventListener("beforeunload", function(event) {
            window.localStorage.removeItem('access_token');
        });
      }, []);

    useEffect(() => {
        // ZZZ Setting ID and text in localStore allows us to scroll to the
        // current location and reopen the popup after the redirect completes.
        finishLogin(getLoginStateOn, getEvdata, openModal);
    });

    useEffect(() => {
        if (loginOK()) {
            getLoginStateOn();
        }
    });
    
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
        <div className="header">
        {
          editCite ? <Editor citeContent={evdata.cite} /> : <div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(evdata.cite)}}></div>
        }
        </div>
        <div className="content">
          {" "}
          {
             spitFieldList(evdata, urlStub)
          }
        </div>
        {
            loginOK() ?
                editCite ?
                <div>
                  <textarea placeholder="Tell us about the proposed change to this cite form" id="modal-comment"></textarea>
                  <table className="actions balanced">
                    <tr>
                      <td><button onClick={getEditCiteOff}>Cancel</button></td>
                      <td><button>Save</button></td>
                    </tr>
                  </table>
                </div>
                :
                <table className="actions balanced">
                  <tr>
                    <td><button onClick={() => {logOut(); getLoginStateOff();}}>Logout</button></td>
                    <td><button onClick={getEditCiteOn}>Edit</button></td>
                  </tr>
                </table>
            :
            <table className="actions wideleft">
              <tr>
                <td className="login-note">
                    <p>
                        The Jurism record for the citation are shown above. 
                    </p>
                    <p>
                        Log in to GitHub to propose changes or additions to the cite examples.
                    </p>
                </td>
                <td><button onClick={startLogin}>Login</button></td>
              </tr>
            </table>
        }
      </div>
    )}}
    </Popup>
)}

ReactDOM.render(<App />, document.querySelector("#popup-root"));
