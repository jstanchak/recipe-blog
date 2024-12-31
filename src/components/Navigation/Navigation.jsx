import { LINKS } from "../../data";
import NavLink from "../NavLink/NavLink";

export default function Navigation({tab, selectTab}) {

    return (
    <nav className="bg-slate-800 text-white text-center py-2 font-body sticky top-0 z-10">
         <ul className="flex justify-center list-none md:flex-row flex-col">
            {LINKS.map((link, index) => (
                <NavLink link={link} key={index} isSelected={tab === index} onClick={()=> selectTab(index)}/>
            ))}
         </ul>
     </nav>
    )
  }