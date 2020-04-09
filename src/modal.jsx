import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { urlParts } from './utils.js';
import { checkPull, getPullRequestURL } from './checkpull';
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
    const [editCite, setEditCite] = useState(false);
    const [loginState, setLoginState] = useState(false);

    const openModal = useCallback(async () => {
        if (loginOK()) {
           if (!getPullRequestURL()) {
               // Set URL and proposed cite form of pull request in localStorage
               await checkPull();
           }
        }
        openModalFinal();
    });

    // Callbacks to manipulate the states
    const openModalFinal = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: false
        }
    }), []);

    const closeModal = useCallback(() => setPopup(popup => {
          window.localStorage.removeItem('cite_id');
          window.localStorage.removeItem('cite_text');
          window.localStorage.removeItem('cite_desc');
          window.localStorage.removeItem('cite_url');
          return {
              on: false,
              edit: false
          }
    }), []);
    const getEditCiteOn = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: true
        }
    }), []);

    useEffect(() => {
        console.log('Set listeners =99=');
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
              openModal();
            })
        }
        window.addEventListener("beforeunload", function(event) {
            window.localStorage.removeItem('access_token');
        });
      }, []);

    useEffect(() => {
        // Setting ID and text in localStore allows us to scroll to the
        // current location and reopen the popup after the redirect completes.
        finishLogin(openModal);
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
             (<Suspense fallback={<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("cite_text"))}}></div>}>
                 <Editor citeContent={window.localStorage.getItem("cite_text")} />
             </Suspense>)
             :
             (<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("cite_text"))}}></div>)
        }
        </div>
        <div className="content">
          {" "}
          <Suspense fallback={<div>Loading, please wait.</div>}>
              <FieldList id={window.localStorage.getItem("cite_id")} urlStub={urlStub} />
          </Suspense>
        </div>
        {
            loginOK() ?
                popup.edit ?
                (<div>
                  <textarea placeholder="Tell us about the proposed change to this cite form" id="modal-comment" defaultValue={window.localStorage.getItem("cite_desc")}></textarea>
                  <table className="actions balanced">
                    <tbody>
                    <tr>
                      <td><button onClick={() => {openModal()}}>Cancel</button></td>
                      <td>
                          <Suspense fallback={<button id="save-button">Save</button>}>
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
                    <td><button onClick={() => {logOut(); openModalFinal();}}>Logout</button></td>
                      {
                        getPullRequestURL() ?
                          (<td><button onClick={() => {window.location.href = getPullRequestURL()}} className="review-button">Review</button></td>) :
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
