import React from 'react'
import {NavLink} from "react-router-dom"
import anime from 'animejs'

const Naviguation = () => {
    return (
        <div className="naviguation">
            <div className="navi-1">
                <NavLink exact to="/home" activeClassName="nav-active">
                    Acceuil
                </NavLink>
            </div>
            <div className="navi-2">
                <NavLink exact to="/resume" activeClassName="nav-active">
                    Résumé
                </NavLink>
            </div>
            <div className="navi-3">
                <NavLink exact to="/portfolio" activeClassName="nav-active">
                    Portfolio
                </NavLink>
            </div>
        </div>
    )
}

export default Naviguation
