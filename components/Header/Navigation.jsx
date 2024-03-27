'use client'

import { navs } from '@data/data'

export default function Navigation() {
  return (
    <nav className="header__nav">
        {navs.map((nav, i) => (
            <a key={i} className="header__nav-link" href={nav.href}>{nav.link}</a>
        ))}
    </nav>
  )
}
