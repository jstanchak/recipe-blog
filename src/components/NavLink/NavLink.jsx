import "./NavLink.css";

export default function NavLink({link, isSelected, onClick}) {
    return (
        <li className={isSelected ? 'active' : undefined}>
            <span className="nav-link" onClick={onClick}>{link.title}</span>
        </li>
    )
}