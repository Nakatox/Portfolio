import React from 'react'
import Naviguation from './Naviguation'
import Profile from './Profile'
function About() {
    return (
        <div className="container">
        <Profile></Profile>
        <div className="content-container">
            <Naviguation></Naviguation>
            <div className="resume">
                <div className="titre-resume">
                    <p>Résumé</p>
                    <div className="barre-resume"></div>
                    <p>Voici un résumé de mon parcour et des technologies que je maitrise actuellement.</p>
                </div>
                <div className="parcour-resume">
                    <div className="education-parcour">
                        <div className="education-title">
                            <div>
                                <img src="images/school.png" alt="" />
                            </div>
                            <div>
                                <p>Edcucation</p>
                            </div>
                        </div>
                        <div className="education-contents">
                            <div className="education-content">
                                <div>
                                    <p>Epitech Digital - Paris</p>
                                </div>
                                <div>
                                    <p>2020 -- 2023</p>
                                </div>
                                <div>
                                    <p>Je suis actuellement en train d'apprendre les languages du web front et back afin de réaliser des sites internet. L'école me forme aussi à travailler en groupe.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div>
                                    <p>Lycée Raoul Follereau - Nevers</p>
                                </div>
                                <div>
                                    <p>2017 -- 2020</p>
                                </div>
                                <div>
                                    <p>J'y ai appris les fondamentaux de la création de bases de donnée et les requêtes SQL en spécialité SIG de la filliaire STMG.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div>
                                    <p>Stage Animation ISART - Paris</p>
                                </div>
                                <div>
                                    <p>Juin 2018</p>
                                </div>
                                <div>
                                    <p>J'y ai appris les bases de l'animation 3D et la façon de travailler d'un studio d'animation.</p>
                                </div>
                                <div className="barre-parcour">
                                    <div className="all-circle">
                                        <div className="cercle-bleu"></div>
                                        <div className="cercle-bleu"></div>
                                        <div className="cercle-bleu"></div>
                                    </div>
                                    <div className="trait"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hobbies">
                        <p>Mes hobbies</p>
                        <div className="content-hobbies">
                            <div className="dessin">
                                <div>
                                    <img src="img/dessin.png" alt="" />
                                </div>
                                <div>
                                    <p>J'ai toujours été passioné en l'art en général, je dessine moi-même quand l'envie m'en prends.</p>
                                </div>

                            </div>
                            <div className="cinema">
                                <div>
                                    <img src="img/cinema.png" alt="" />
                                </div>
                                <div>
                                    <p>J'apprécie les bons films méconnus à tort tel que ceux de Pierre Richard qui me fascine.</p>
                                </div>

                            </div>
                            <div className="musique">
                                <div>
                                    <img src="img/musique.png" alt="" />
                                </div>
                                <div>
                                    <p>Me perdre dans mes pensées avec une oeuvre d'Hans Zimmer.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    )
}

export default About
