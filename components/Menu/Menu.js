import { navs } from "@data/data"
import Image from "next/image"

export default function Menu({status, closeMenu}) {

    return (
        <div className={!status ? "menu" : "menu menu_active"}>
            <button className="menu__close-btn" onClick={closeMenu}>
                <Image priority className="menu__close-btn-icon" src="img/Icons/close_icon.svg" alt="Назад" width={12} height={12}/>
            </button>  
            <nav className="menu__nav">
                {navs.map((nav, i) => (
                    <a className="menu__nav-link" key={i} href={nav.href} onClick={closeMenu}>{nav.link}</a>
                ))}
            </nav>
        </div>
    )
}
