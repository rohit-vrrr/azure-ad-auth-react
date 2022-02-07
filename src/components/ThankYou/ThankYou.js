import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./thankyou.module.css";
import { Button } from "@mui/material";
import AzureLogo from "../../assets/azure-logo.png";

const ThankYou = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className={styles.thankyouContainer}>
            <img className={styles.azureLogo} src={AzureLogo} alt="azure-logo" />
            <p className={styles.para}>Thank You for testing Azure AD Authentication</p>
            <Button className={styles.homeBtn} variant="contained" onClick={handleClick}>Home Page</Button>
        </div>
    );
}

export default ThankYou;
