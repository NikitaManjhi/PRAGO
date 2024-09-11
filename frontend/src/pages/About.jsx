import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="Prago"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Prago, where tradition meets innovation. Born from the
            vibrant culture of Indian ethnic wear, Prago offers timeless pieces
            with a modern twist, bringing you a unique fusion of classic
            craftsmanship and contemporary style.
          </p>
          <p>
            Founded in a small town with a big dream, we started as a humble
            boutique catering to a few loyal customers. Today, Prago is proud to
            serve fashion enthusiasts across the nation, staying true to our
            roots while evolving with the latest trends. Our collection reflects
            the diversity and richness of Indian ethnic wear, designed for the
            modern wardrobe while celebrating the traditions we hold dear.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            At Prago, our mission is simple: to make fashion personal and
            accessible. We believe that style is an extension of your
            individuality, which is why we offer customization on-demand.
            Whether it's adjusting the size for the perfect fit or altering the
            design to match your unique style, we’re committed to crafting
            outfits that are tailored just for you.
          </p>
          <p>
            We strive to preserve the essence of Indian ethnic wear while
            offering a fresh, contemporary touch. Our goal is to deliver
            clothing that not only honors tradition but also empowers you to
            express yourself with confidence and elegance, no matter the
            occasion.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-8 justify-center">
        <div className="border border-gray-300 shadow-lg rounded-lg px-10 md:px-16 py-8 flex flex-col gap-5 transition-transform transform duration-300">
          <b className="text-lg text-gray-700">Quality Assurance</b>
          <p className="text-gray-600">
            We prioritize quality at every stage of production. Each garment is
            crafted with precision, using the finest fabrics and time-honored
            techniques. Our attention to detail ensures that every piece you buy
            is not only beautiful but durable.
          </p>
        </div>

        <div className="border border-gray-300 shadow-lg rounded-lg px-10 md:px-16 py-8 flex flex-col gap-5 transition-transform transform duration-300">
          <b className="text-lg text-gray-700">Convenience</b>
          <p className="text-gray-600">
            With Prago, shopping is hassle-free. Whether you're purchasing
            online or requesting customizations, we make sure the process is
            simple, seamless, and tailored to your needs, allowing you to shop
            with ease from the comfort of your home.
          </p>
        </div>

        <div className="border border-gray-300 shadow-lg rounded-lg px-10 md:px-16 py-8 flex flex-col gap-5 transition-transform transform duration-300">
          <b className="text-lg text-gray-700">Exceptional Customer Service</b>
          <p className="text-gray-600">
            We believe in building relationships, not just selling clothes. Our
            dedicated support team is always available to assist you with any
            questions or concerns, ensuring that you feel valued and satisfied
            with every purchase.
          </p>
        </div>

        <div className="border border-gray-300 shadow-lg rounded-lg px-10 md:px-16 py-8 flex flex-col gap-5 transition-transform transform  duration-300">
          <b className="text-lg text-gray-700">Customization on Demand</b>
          <p className="text-gray-600">
            Prago offers a personalized experience through our customization
            services. Whether it's sizing or styling, we ensure that every
            outfit is tailored perfectly to your preference, making your
            clothing as unique as you are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
