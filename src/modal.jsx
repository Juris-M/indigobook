import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { urlParts } from './utils.js';
import checkpull from './checkpull';
import { startLogin, finishLogin, loginOK, logOut } from './login.js';

const FieldList = React.lazy(() => import('./fieldlist.jsx'));
const Editor = React.lazy(() => import('./editor.jsx'));
const SaveButton = React.lazy(() => import('./save.jsx'));

import "./modal.css";

var urlStub = urlParts().base;

export const App = () => {
    // States to report things into React
    const [popup, setPopup] = useState({
        on: false,
        edit: false
    });
    const [bibdata, setBibdata] = useState({});
    const [evdata, setEvdata] = useState({});
    const [editCite, setEditCite] = useState(false);
    const [loginState, setLoginState] = useState(false);
    const [pullRequestURL, setPullRequestURL] = useState("");

    const setPR = useCallback((url) => (setPullRequestURL(pullRequestURL => {
        pullRequestURL = url;
        return pullRequestURL;
    })));

    // Callbacks to manipulate the states
    const openModalFinal = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: false
        }
    }), []);

    const openModal = useCallback(async (url) => {
        if (!url) {
          url = await checkpull();
        }
        setPR(url)
        openModalFinal();
    });

    // ZZZ We remove the ID and the text from localStorage on discretionary
    // closing of the popup.
    const closeModal = useCallback(() => setPopup(popup => {
           window.localStorage.removeItem('cite_id');
          window.localStorage.removeItem('cite_text');
          return {
              on: false,
              edit: false
          }
    }), []);
    const getEvdata = useCallback((data) => setEvdata(evdata => data), []);
    const getEditCiteOn = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: true
        }
    }), []);
    const getLoginStateOn = useCallback(() => setLoginState(loginState => loginState = true), []);
    const getLoginStateOff = useCallback(() => setLoginState(loginState => loginState = false), []);

    // An effect to set up the event listeners
    useEffect(() => {
        console.log('Set listeners =71=');
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


    // XXX
    useEffect(() => {
        if (loginOK()) {
            getLoginStateOn();
        }
    });
    
    // The popup
    return (
    <Popup 
        open={popup.on}
        modal
        defaultOpen={false}
        closeOnDocumentClick
        closeOnEscape
        onClose={closeModal}
    >
    {close => {
    return (
        <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>
        <div className="header">
        {
           popup.edit ?
             (<Suspense>
                 <Editor citeContent={evdata.cite} />
             </Suspense>)
             :
             (<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(evdata.cite)}}></div>)
        }
        </div>
        <div className="content">
          {" "}
          <Suspense fallback={<div>Loading, please wait.</div>}>
              <FieldList id={evdata.id} urlStub={urlStub} />
          </Suspense>
        </div>
        {
            loginOK() ?
                popup.edit ?
                (<div>
                  <textarea placeholder="Tell us about the proposed change to this cite form" id="modal-comment"></textarea>
                  <table className="actions balanced">
                    <tbody>
                    <tr>
                      <td><button onClick={() => {openModal()}}>Cancel</button></td>
                      <td>
                          <Suspense>
                              <SaveButton modal={openModal}/>
                          </Suspense>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>)
                :
                (<table className="actions balanced" id="login-base-buttons">
                  <tbody>
                  <tr>
                    <td><button onClick={() => {logOut(); getLoginStateOff();}}>Logout</button></td>
                      {
                        pullRequestURL ?
                          (<td><button onClick={() => {window.location.href = pullRequestURL}} className="review-button">Review</button></td>) :
                          (<td hidden={true}><button>Review</button></td>)
                      }
                    <td><button onClick={getEditCiteOn}>Edit</button></td>
                  </tr>
                  </tbody>
                </table>)
            :
            <table className="actions wideleft">
              <tbody>
              <tr>
                <td className="login-note">
                    <p>
                        The Jurism record for the citation are shown above. 
                    </p>
                    <p>
                        Log in to GitHub to propose a change.
                    </p>
                </td>
                <td><button onClick={startLogin}>Login</button></td>
              </tr>
              </tbody>
            </table>
        }
      </div>
    )}}
    </Popup>
)}

ReactDOM.render(<App />, document.querySelector("#popup-root"));
