import React from 'react'

function Profile() {
    return (
        <div className="profile-container">
            <div className="image-container">
                <img src="/img/profile-picture.jpg" alt=""/>
            </div>
            <div className="name">
                <p>Vincent <span>Loron</span></p>
            </div>
            <div className="work">
                <p>Developpeur React</p>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/vincent-loron-181464207/">Linkedin</a>
                <a href="https://github.com/Nakatox">Github</a>
            </div>
            <div className="contact">
                <p>14e Paris, France</p>
                <a href="mailto:vincent.loron@supinternet.fr">vincent.loron@supinternet.fr</a>
                <a href="tel:0783832948">07 83 83 29 48</a>
            </div>
            <div className="cv">
                <a href="https://drive.google.com/file/d/1NeTc4Gs-I8IqCF40pNH4GP6X9ElP1G62/view?usp=sharing" >Voir mon CV</a>
            </div>
        </div>
    )
}

export default Profile
