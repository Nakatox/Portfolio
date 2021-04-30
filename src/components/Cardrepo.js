import React from 'react'

function Cardrepo(props) {
    const {repo} = props
    const clickLink = () => {
        window.open(
            repo.html_url, "_blank");
    }
    return (
        <div onClick={clickLink} className="card">
            <p className="name">{repo.name}</p>
            <p>{repo.description}</p>
            <p className="date">{repo.pushed_at.substr(0,10)}</p>
            <p className="language">{repo.language}</p>
        </div>
    )
}

export default Cardrepo
