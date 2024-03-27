import "./Navigation.css";
import { LINKS } from "../../data";
import NavLink from "../NavLink/NavLink";
import {useState} from "react";


export default function Navigation({tab, selectTab}) {

    return (
    <nav>
         <ul>
            {LINKS.map((link, index) => (
                <NavLink link={link} isSelected={tab === index} onClick={()=> selectTab(index)}/>
            ))}
         </ul>
     </nav>
    )
  }