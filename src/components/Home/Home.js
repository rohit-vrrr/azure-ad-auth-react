import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as msal from "@azure/msal-browser";

import styles from "./home.module.css";
import { Button } from "@mui/material";
import AzureLogo from "../../assets/azure-logo.png";
import { msalConfig, scopes } from "../../config.js";

const Home = () => {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ user, setUser ] = useState({});
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const msalInstance = new msal.PublicClientApplication(msalConfig);

    const login = async () => {
        try {
            await msalInstance.loginPopup({
                scopes: scopes,
                prompt: 'select_account'
            }).then(() => {
                setIsAuthenticated(true);
                setError(null);
            });
        } catch(err) {
            setIsAuthenticated(false);
            setUser({});
            setError(err);
        }
    }

    const logout = async () => {
        navigate('/thank-you');
        // const currentAccount = msalInstance.getAccountByHomeId(homeAccountId);
        // await msalInstance.logoutRedirect({
        //     account: currentAccount,
        //     postLogoutRedirectUri: 'http://localhost:3000/thank-you'
        // });
    }

    return (
        <div className={styles.homeContainer}>
            <img className={styles.azureLogo} src={AzureLogo} alt="azure-logo" />
            {
                isAuthenticated ? (
                    <>
                        <p className={styles.para}>Successfully logged in</p>
                        <Button className={styles.logoutBtn} variant="contained" color="error" onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <>
                        <Button className={styles.loginBtn} variant="contained" onClick={login}>Login</Button>
                    </>
                )
            }
        </div>
    );
}

export default Home;
