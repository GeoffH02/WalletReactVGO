import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoVgo from "../../images/logoPurpleBig.png"

function Login() {
    return (
        <div className="row loginElem d-flex justify-content-center align-items-center text-center lightmode">
            <img src={LogoVgo} width="75px" alt="logoVGO"/>
            <div className="col-12 d-flex flex-column">
                <span className="fw-bold fs-2 mt-2">Nice to see you!</span>
                <span className="subtitle">Decentralization is a *click* away!</span>
            </div>
            <div className="col-11 text-start" id="unlockForm">
                <p className="label"><span id="unlockPanePasswordBase">Enter your password</span></p>
                <span id="unlockPanePasswordWrong" style={{display: "none"}}>Wrong password</span>
                <input id="unlockPanePassword" type="password" className="input w-100" placeholder="Password"/>
            </div>
            <div className="col-11">
                <button className="button w-100" id="unlockPanePasswordSubmit" disabled>
                    UNLOCK
                    {/*
                    <i className="fas fa-spinner fa-pulse" style={{display: "none"}}></i>
*/}
                </button>
            </div>
            <div className="recover mt-5">
                <p>Or <span>recover your wallet</span> from a Secret</p>
            </div>
        </div>
    );
}

export default Login;