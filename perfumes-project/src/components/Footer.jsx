import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-pink-500 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <i className='bx bxs-phone'></i> +212 6XX XX XX XX
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <i className='bx bxs-envelope'></i> contact@ifperfumes.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <i className='bx bxs-map'></i> Casablanca, Maroc
            </p>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="#" className="hover:text-gray-400"><i className='bx bxl-facebook'></i></a>
              <a href="#" className="hover:text-gray-400"><i className='bx bxl-instagram'></i></a>
              <a href="#" className="hover:text-gray-400"><i className='bx bxl-twitter'></i></a>
            </div>
          </div>
          
          {/* Map Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Localisation</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.524515157506!2d-7.625574284803133!3d33.58672598073521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0e0b3b47b9%3A0x593df68b2e0853b9!2sMaarif%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1707212345678" 
              width="300" 
              height="200" 
              className="border-0 w-full"
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
          <div className=''>
            <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter
            </h3>
            <p className='text-gray-400 mb-4 max-w-80 text-white'>The latest perfumes sent to your inbox weekly.</p>
            <input type="text"placeholder='Enter your email'
             className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700  w-full md:w-auto 'autoFocus />
            <button className='py-2 px-4 rounded bg-gray-500 text-white cursor-pointer '> Submit
            </button>
        </div>
        </div>
       
        <p className=" py-4 mt-10 text-center text-white-500">© 2025 IF Perfumes. Tous droits réservés.</p>

      </footer>
    );
  };
  
  export default Footer;
  