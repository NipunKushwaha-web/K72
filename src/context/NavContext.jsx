import React, { useMemo, useState, createContext } from 'react' // 1. Added createContext here
import { useLocation } from 'react-router-dom'

// 2. Removed the broken import on line 3 and created the contexts here instead!
export const NavbarContext = createContext(null);
export const NavbarColorContext = createContext(null);

const getNavColorForPath = (pathname) => {
    if (pathname === '/projects' || pathname === '/agence') {
        return 'black'
    }
    return 'white'
}

const NavContext = ({ children }) => {
    const location = useLocation()
    const [navOpen, setNavOpen] = useState(false)
    const navColor = useMemo(() => getNavColorForPath(location.pathname), [location.pathname])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, undefined]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContext