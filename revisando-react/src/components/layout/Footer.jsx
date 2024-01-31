import React from "react";
import Styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = ()=>{

   return (
    <footer>
        <ul className={Styles.list_estilo}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        <p>nosso rodápe</p>
    </footer>
   )

}

export default Footer