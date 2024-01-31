import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
      <ul>
       <li className={Styles.listMod}>
        <Link className={Styles.listMod} to="/">Home</Link>
       </li>
       <li className={Styles.listMod}>
        <Link className={Styles.listMod} to="/empresa">Empresa</Link>
       </li>
       <li className={Styles.listMod}>
        <Link className={Styles.listMod} to="/Contato">Contato</Link>
       </li>
      </ul>
    )
}

export default Navbar