export default function NavLink({link, isSelected, onClick}) {
    return (
        <li className={`px-4 inline mr-2 cursor-pointer ${isSelected ? 'font-bold' : 'font-light'}`}>
            <span className="cursor-pointer transition-colors duration-300 ease-in-out hover:bg-slate-600 decoration-none font-body nav-link px-4 py-1" onClick={onClick}>{link.title}</span>
        </li>
    )
}