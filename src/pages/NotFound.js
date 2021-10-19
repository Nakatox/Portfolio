import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="not-found">
           <h1 className="not-found-text">Il n'y a rien ici...</h1>
           <NavLink exact to="/home">Retour</NavLink>
        </div>
    )
}

export default NotFound

