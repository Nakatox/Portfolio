import React from 'react'
import {NavLink} from "react-router-dom"

const Naviguation = () => {
    return (
        <div className="naviguation">
            <NavLink exact to="/home" activeClassName="nav-active">
                À propos
            </NavLink>
            <NavLink exact to="/resume" activeClassName="nav-active">
                Résumé
            </NavLink>
            <NavLink exact to="/portfolio" activeClassName="nav-active">
                Portofolio
            </NavLink>
        </div>
    )
}

export default Naviguation
