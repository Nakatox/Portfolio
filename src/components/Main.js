import React, { useState } from 'react'
import Naviguation from './Naviguation'
import Profile from './Profile'
import { motion } from 'framer-motion'
import { CarSkill } from './CarSkill'

function Main() {
    const [opacity, setopacity] = useState(0)


    return (
        <div className="container">
            <div className="bloc-top">
                <div className="image-and-navi">
                    <div className="logo-container">
                        <img src="img/logo-black.png" alt="" className="logo-vincent"></img>
                    </div>
                </div>
                <Profile></Profile>
            </div>
            <Naviguation></Naviguation>
            <div className="content-container">
                <div className="about_me">
                    <p className="about_me_text">À propos de moi</p>
                    <div className="about-intro">
                        <p>Je suis développeur et étudiant à Epitech Digital avec un fort attrait pour React JS. Je maitrise également la partie back-end avec Django ou encore Symfony mais aussi la maitrise du SQL. J'ai toujours été passionné par le developpement, c'est pourquoi j'ai choisi d'en faire mon métier.</p>
                    </div>
                    
                <div className="skills">
                    <div>
                        <p>Technologies</p>
                    </div>
                </div>
                <div className="skills-desc">
                    <CarSkill img="img/react.png" title="React" content="React est le Framework avec lequelle j'ai le plus travaillé et donc celui avec lequelle je sui le plus à l'aise. Que ce soit pour des petits projets, comme des plus gros nottament une plateforme de visioconférence en direct entre plusieurs utilisateur dans la cadre du télétravail pour les étudiants." ></CarSkill>
                    <CarSkill img="img/node.png" title="Node" content="J'utilise principalement NodeJs pour créer mes API REST. Je peux y ajouter du websocket qui est très bien géré ici. Il m'a aussi servi pour créer un serveur de visioconférence avec socket.io" ></CarSkill>
                    <CarSkill img="img/symfony.png" title="Symfony" content="Symfony est pratique pour créer des applications rapidement grâce a tous les package disponible. J'ai recréé un Youtube (disponible dans l'onglet portfolio), ce fut un porjet très agréable à réaliser." ></CarSkill>
                    <CarSkill img="img/django.png" title="Django" content="J'ai réalisé quelques projets avec Django, et sa simplicité d'utilisation notament avec son ORM rend très agréable l'utilisation de ce framework." ></CarSkill>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
