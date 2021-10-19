import React from 'react'
import Naviguation from './Naviguation'
import Profile from './Profile'

function Main() {
    return (
        <div className="container">
            <Profile></Profile>
            <div className="content-container">
                <Naviguation></Naviguation>
                <div className="about_me">
                    <p>À propos de moi</p>
                    <div className="about-barre"></div>
                    <div className="about-intro">
                        <p>Je suis développeur et étudiant à Epitech Digital avec un fort attrait pour React JS. Je maitrise également la partie back-end et SQL. J'ai toujours été passionné par le developpement, c'est pourquoi j'ai choisi d'en faire mon métier.</p>
                    </div>
                    <div className="about-competences-container">
                        <p>Mes compétences</p>
                        <div className="about-competences">
                            <div className="about-competence- about-competence-1">
                                <div>
                                    <img src="img/codage.png" alt="" />
                                </div>
                                <div>
                                    <p>Intégration Web</p>
                                    <p>Intégration site web,reponsive et dynamique. Utilisation d'API, librairie couplé avec React JS pour avoir un site performant.</p>
                                </div>
                            </div>
                            <div className="about-competence- about-competence-2">
                                <div>
                                    <img src="img/database.png" alt="" />
                                </div>
                                <div>
                                    <p>SQL/BDD</p>
                                    <p>Création de base de donnée. Requêtes SQL.</p>
                                </div>
                            </div>
                            <div className="about-competence- about-competence-3">
                                <div>
                                    <img src="img/back.png" alt="" />
                                </div>
                                <div>
                                    <p>Back-end</p>
                                    <p>Sécurité, interraction avec la base de donnée, algorithme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                    <div>
                        <img src="images/codage.png" alt="" /><p>Technologies</p>
                    </div>
                </div>
                <div className="skills-desc">
                    <div>
                        <p>React</p>
                        <p>React est mon framework favoris, la structure et la facon coder de ce framework m'intéresse vraiment. Ce site est d'ailleur codé en React.</p>
                    </div>
                    <div>
                        <p>Javascript</p>
                        <p>Rendre dynamique un site mais surtout maitriser des APIs m'intéresse énormément, j'ai beaucoup d'idées en tête pour la réalisation de projets avec elles.</p>
                    </div>
                    <div>
                        <p>Php</p>
                        <p>Communiquer avec la base do donnée, réaliser des interfaces de connexion ou encore créer des algorithmes.</p>
                    </div>
                    <div>
                        <p>SQL</p>
                        <p>Faire des requêtes SQL complexes pour réaliser toutes sortes fonctions, mais aussi créer des bases de données à partir de rien.</p>
                    </div>
                    <div>
                        <p>HTML5/CSS3</p>
                        <p>Intégrer des sites de A à Z à partir de maquette faite par des designers.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main
