import React, { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navbar';




const Home = () => {
    const [currentWord, setCurrentWord] = useState("Aurélien");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord === "Aurélien" ? "Blanchet" : "Aurélien"));
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const headline = document.querySelector('.cd-headline');
        headline.classList.add('rotate-letters');
        const animationDuration = 700;
        setTimeout(() => {
            headline.classList.remove('rotate-letters');
        }, animationDuration);
    }, [currentWord]);
    return (
        <div>
            <Navigation />
            <div className='box-intro'>
                <section className="cd-intro">
                    <a href="/parcours"><img className="tete logo-ls" src="./AUBL.png" alt="Description de l'image" /></a>

                    <h1 className={`cd-headline rotate-1 ${currentWord === "Blanchet" ? "blanchet-transition" : "aurelien-transition"}`}>
                        {currentWord.split("").map((letter, index) => (
                            <span key={index} className="rotate-letter">
                                {letter}
                            </span>
                        ))}
                    </h1>
                    <h5 className="animate-character">"L'informatique forge l'avenir au travers d'une symbiose entre logique et créativité."</h5>
                    <h5 className="animate-character">- Blanchet</h5>

                </section>
            </div>

            <div className="scroll"></div>

            <div class="portfolio-div">
                <div class="portfolio">
                    <div class="no-padding portfolio_container">
                        <div class="row">

                            <div className="row">
                                <div class="col-md-3 col-sm-6  projets">
                                    <a href="gsb.html" class="portfolio_item">
                                        <img class="img-responsive" src="./AUBL.png" alt="Description de l'image" />
                                        <div class="portfolio_item_hover">
                                            <div class="portfolio-border clearfix">
                                                <div class="item_info">
                                                    <span>Galaxy Swiss Bourdin</span>
                                                    <em><span>+</span></em>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-md-3 col-sm-6 projets">
                                    <a href="meteoguess.html" class="portfolio_item">
                                        <img class="img-responsive" src="./AUBL.png" alt="Description de l'image" />
                                        <div class="portfolio_item_hover">
                                            <div class="portfolio-border clearfix">
                                                <div class="item_info">
                                                    <span>MeteoGuess</span>
                                                    <em><span>+</span></em>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-sm-12 projets d-md-block d-sm-none">
                                    <a href="itil.html" class="portfolio_item">
                                        <img class="img-responsive" src="./AUBL.png" alt="Description de l'image" />
                                        <div class="portfolio_item_hover">
                                            <div class="portfolio-border clearfix">
                                                <div class="item_info">
                                                    <span>Processus ITIL</span>
                                                    <em><span>+</span></em>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>



                            <div class="col-md-3 col-sm-6 projets item-row-margin">
                                <a href="awoc.html" class="portfolio_item">
                                    <img class="img-responsive" src="./AUBL.png" alt="Description de l'image" />
                                    <div class="portfolio_item_hover">
                                        <div class="portfolio-border clearfix">
                                            <div class="item_info">
                                                <span>A Week Of Culture</span>
                                                <em><span>+</span></em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-md-3 col-sm-6 certifications item-row-margin">
                                <a href="certification.html" class="portfolio_item">
                                    <img class="img-responsive" src="./AUBL.png" alt="Description de l'image" />
                                    <div class="portfolio_item_hover">
                                        <div class="portfolio-border clearfix">
                                            <div class="item_info">
                                                <span>Certifications</span>
                                                <em><span>+</span></em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;