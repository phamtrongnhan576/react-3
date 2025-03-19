import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-[url('./assets/img/hero.jpg')] bg-cover bg-center text-white py-32 mt-16">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative custom-container text-center px-6">
                <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
                    Elevate Your Style
                </h1>

                <p className="text-lg sm:text-xl mb-8 opacity-90">
                    Explore the freshest sneaker trends crafted for your
                    lifestyle.
                </p>
                <a
                    href="#"
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
