import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './mediaqueries.css';
const Parfums = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3); // Affiche 3 parfums par défaut

    // Liste des parfums avec le nom, le prix, et l'image
    const parfums = [
        { name: 'Aesop', price: '1200 dh', image: '/Aesop.webp' },
        { name: 'Homa', price: '950 dh', image: '/homa.avif' },
        { name: 'Sola', price: '1100 dh', image: '/sola.png' },
        { name: 'Velvet Fantasy Montale', price: '1300 dh', image: '/velvet-fantasy1200.jpg' }
    ];

    // Fonction de mise à jour des cartes à afficher en fonction de la taille de la fenêtre
    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3); // Affiche 3 images sur les écrans plus grands
            } else {
                setCardsToShow(1); // Affiche 1 image sur les petits écrans
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    // Passer à l'image suivante
    const nextPerfume = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % parfums.length);
    };

    // Passer à l'image précédente
    const prevPerfume = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? parfums.length - 1 : prevIndex - 1);
    };

    return (
        <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="parfums">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-pink-500">
                Nos <span className="underline decoration-pink-500 underline-offset-4 font-light">Parfums</span>
            </h1>

            {/* Slider buttons */}
            <div className="flex justify-center mb-6">
                <button
                    className="p-3 bg-pink-500 rounded mr-2 cursor-pointer"
                    onClick={prevPerfume}
                    aria-label="Précédent"
                >
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-white" />
                </button>
                <button
                    onClick={nextPerfume}
                    className="p-3 bg-pink-500 rounded cursor-pointer"
                    aria-label="Suivant"
                >
                    <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-white" />
                </button>
            </div>

            {/* Project slider container */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {parfums.map((parfum, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/3 group">
                            {/* Image avec effet hover */}
                            <img
                                src={parfum.image}
                                alt={`Parfum ${parfum.name}`}
                                className="w-full h-auto mb-14 rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">{parfum.name}</h2>
                                    <p className="text-gray-600 text-sm">{parfum.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Parfums;
