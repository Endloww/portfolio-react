import React, { useRef, useEffect, useState } from 'react';

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
            <div className='box-intro'>
                <section className="cd-intro">
                    <img className="tete logo-ls" src="./AUBL.png" alt="Description de l'image" />

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

        </div>
    );
};

export default Home;