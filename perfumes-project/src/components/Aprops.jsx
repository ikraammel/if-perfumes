import React from 'react'
import './mediaqueries.css';

const Aprops = () => {
  return (
    <div>
      <section id="apropos" className="py-16 bg-white flex justify-center">
  <div className="about-container bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-2xl max-w-4xl mx-auto px-6">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-pink-500">
          A propos <span className="underline decoration-pink-500 underline-offset-4 font-light">de nous</span>
    </h1>
    <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
      Bienvenue chez <strong className="text-pink-500">IF Perfumes</strong>, votre destination ultime pour des parfums d'exception. Fondée avec passion, notre boutique propose une sélection raffinée de fragrances uniques, alliant élégance, authenticité et qualité.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
      Nous croyons que chaque parfum raconte une histoire et évoque une émotion. C'est pourquoi nous collaborons avec les meilleures maisons de parfumerie pour offrir des senteurs qui marquent les esprits. Que vous cherchiez une touche de sophistication, une note envoûtante ou une fragrance signature, <strong className="text-pink-500">IF Perfumes</strong> saura combler vos attentes.
    </p>
    <p className="text-gray-800 font-semibold text-lg text-center mt-6">
      <strong>Restez informé ! Inscrivez-vous à notre newsletter pour ne rien manquer.</strong>
    </p>
  </div>
</section>

    </div>
  )
}

export default Aprops
