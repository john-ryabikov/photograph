'use client'

import Image from "next/image"
import Navigation from "./Navigation"
import Menu from "@components/Menu/Menu"

import { useState } from "react"

export default function Header() {

  const [menuShow, setMenuShow] = useState(false)

  const openMenu = () => {
      setMenuShow(prev => !prev)
  }

  const closeMenu = () => {
    setMenuShow(false)
}

  return (
    <header className="header">
        <Menu status={menuShow} closeMenu={closeMenu}/>
        <a className="header__icon" href="/">
            <Image priority src="img/Icons/logo_icon.svg" alt='' width={42} height={42}/>
        </a>    
        <Navigation/>
        <button className="header__menu-btn" onClick={openMenu}>
            <Image priority className="header__menu-icon" src="img/Icons/menu_icon.svg" alt='' width={18} height={18}/>
        </button>
    </header>
  )
}
