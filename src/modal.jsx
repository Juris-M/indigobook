import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Spinner from "react-spinner";
import './react-spinner.css';

import Popup from "reactjs-popup";
import DOMPurify from 'dompurify'
import { urlParts, getPullRequestURL, loginOK, logOut } from './utils.js';
// import checkpull from './checkpull';
// import { startLogin, finishLogin, loginOK, logOut } from './login.js';
import parseid from './parseid';

const TabbedDisplay = React.lazy(() => import('./tabbeddisplay.jsx'));
const FieldList = React.lazy(() => import('./fieldlist.jsx'));
const Editor = React.lazy(() => import('./editor.jsx'));
const SaveButton = React.lazy(() => import('./save.jsx'));

import "./modal.css";

var urlStub = urlParts().base;

import placeholders from '../scripts/placeholder-map.json';

export const App = () => {
    // States
    const [popup, setPopup] = useState({
        on: false,
        edit: false
    });
    const [bibdata, setBibdata] = useState({});
    const [editCite, setEditCite] = useState(false);
    const [loginState, setLoginState] = useState(false);
    const [citationInfo, setCitationInfo] = useState({});
    const [callInProgress, setCallInProgress] = useState(false);
    
    const storeCitationInfo = useCallback((obj) => setCitationInfo(citationInfo => citationInfo = obj));

    const storeCallInProgress = useCallback((val) => setCallInProgress(callInProgress => callInProgress = val));
    
    const openModal = useCallback(async () => {
        // XXX For an overlay spinner, set a "popupCalled" state variable
        // XXX here, to show spinner until "popup.on" is true.
        storeCallInProgress(true);
        var html_id = window.localStorage.getItem("html_id");
        if (html_id.match(/^c[0-9]{3}$/)) {
            var elem = document.getElementById(html_id);
            var cite_id = elem.getAttribute("data-info");
            var info = parseid(html_id, cite_id);
            storeCitationInfo(info);
        } else {
            cite_id = "";
            storeCitationInfo({
                html_id: html_id
            });
        }
        if (loginOK()) {
           if (!getPullRequestURL()) {
               // Set URL and proposed cite form of pull request in localStorage
               await getCheckpull(html_id);
           }
        }
        openModalFinal();
        storeCallInProgress(false);
    });

    // Callback setters
    const openModalFinal = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: false
        };
    }), []);

    const closeModal = useCallback(() => setPopup(popup => {
        window.localStorage.removeItem('html_id');
        window.localStorage.removeItem('citation');
        window.localStorage.removeItem('cite_desc');
        window.localStorage.removeItem('cite_url');
        window.localStorage.removeItem('cites_metadata');
        window.localStorage.removeItem('cites_info');
        return {
            on: false,
            edit: false
        };
    }), []);
    
    const getEditCiteOn = useCallback(() => setPopup(popup => {
        return {
            on: true,
            edit: true
        };
    }), []);
    
    const getLogin = (funcName, arg) => {
        return import(/* webpackChunkName: "login" */ './login.js').then(({ default: login }) => {
            return login[funcName](arg);
        }).catch(error => 'An error occurred while loading the Login component');
    };

    const getCheckpull = (html_id) => {
        return import(/* webpackChunkName: "checkPull" */ './checkpull.js').then(({ default: checkPull }) => {
            return checkPull(html_id);
        }).catch(error => 'An error occurred while loading the Login component');
    };
    
    const openInNamedTab = (url) => {
        var a = document.createElement('a');
        a.target="_github_pull_request";
        a.href=url;
        a.click();
    }
    
    const applyPlaceholders = (str) => {
        for (var key in placeholders) {
            str = str.replace(`<var>${key}</var>`, placeholders[key].val);
        }
        return str;
    };
    
    // Events
    useEffect(() => {
        const nodes = document.getElementsByClassName("cite");
        for (var node of nodes) {
            // Pulling details from the event here makes it simpler to
            // repurpose the open event for login-revisits to the page.
            node.addEventListener("click", (ev) => {
                var elem = ev.currentTarget;
                var html_id = elem.getAttribute("id");
                var cite_id = elem.getAttribute("data-info");
                if (html_id === "add-a-cite-button") {
                    html_id = Math.random().toString(36).replace(/[^a-zA-Z]+/g, '').substr(0, 5);
                    window.localStorage.setItem('html_id', html_id);
                    window.localStorage.setItem('citation', '');
                    window.localStorage.setItem('citation_orig', '');
                } else {
                    var info = parseid(html_id, cite_id);
                    if (info) {
                        window.localStorage.setItem('html_id', html_id);
                        window.localStorage.setItem('citation', applyPlaceholders(ev.currentTarget.innerHTML));
                        window.localStorage.setItem('citation_orig', window.localStorage.getItem('citation'));
                        storeCitationInfo(info);
                        openModal();
                    }
                }
                openModal();
            });
        }
        window.addEventListener("beforeunload", function(event) {
            window.localStorage.removeItem('access_token');
        });
      }, []);

    useEffect(() => {
        // Setting ID and text in localStore allows us to scroll to the
        // current location and reopen the popup after the redirect completes.
        getLogin("finishLogin", openModal);
    });

    // The popup
    return (
    <div>
    {
    callInProgress ?
    (<div id="spinner-overlay"><Spinner/></div>)
    :
    (<Popup 
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
             (<Suspense fallback={<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("citation"))}}></div>}>
                 <Editor citeContent={window.localStorage.getItem("citation")} />
             </Suspense>)
             :
             (citationInfo && citationInfo["citation-items"]) ?
                 (<div className="header" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(window.localStorage.getItem("citation"))}}></div>)
                 :
                 (<div className="header">(log in via GitHub to enter a citation example here)</div>)
        }
        </div>
        <div className="content">
          {" "}
          {
              (citationInfo && citationInfo["citation-items"]) ?
                  (citationInfo["citation-items"].length > 1) ?
                      <Suspense fallback={<div>Loading, please wait.</div>}>
                          <TabbedDisplay citationInfo={citationInfo} urlStub={urlStub} />
                      </Suspense>
                      :
                      <Suspense fallback={<div>Loading, please wait.</div>}>
                          <FieldList selectedIndex={0} citationInfo={citationInfo} urlStub={urlStub} />
                      </Suspense>
                  :
                  <p>
                      To propose a new citation example, you will need a GitHub account.
                      Here are the steps:
                      <ul>
                        <li>Log in (via this popup or another) using your GitHub ID and password.</li>
                        <li>Click the <b>Edit</b> button.</li>
                        <li>Enter the citation text above, and provide an explanation of the citation and
                            indicate where in the IndigoBook it should be placed below.</li>
                        <li>Click the <b>Save</b> button.</li>
                        <li>If you have notifications enabled in your GitHub account, you will be
                            informed by email when the editors take up the issue.</li>
                      </ul>
                  </p>
          }
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
                              <SaveButton modal={openModal} citationInfo={citationInfo}/>
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
                          (<td><button onClick={() => {openInNamedTab(getPullRequestURL())}} className="review-button">Review</button></td>) :
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
                <td><button onClick={() => { getLogin("startLogin"); return true; }}>Login</button></td>
              </tr>
              </tbody>
            </table>
        }
      </div>
    )}}
    </Popup>)
}</div>)}

ReactDOM.render(<App />, document.querySelector("#popup-root"));
